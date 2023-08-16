import React, { FC, useContext, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'
import { CodeContext } from '@contexts/codeContext'

import { IProblem } from 'src/types/types'

import { SelectCompiler } from './SelectCompiler'

export const SelectCompilerContainer: FC = () => {
  const { selectedCompiler, setSelectedCompiler } = useContext(CodeContext)
  const { alias } = useParams()
  const {
    data: problems,
    isLoading,
    isError,
  } = useQuery<IProblem[]>(['compilers', trainingSessionId], () => api.getProblems(trainingSessionId))

  useEffect(() => {
    if (problems && !selectedCompiler) {
      const currentProblem = problems.find(problem => problem.alias === alias)
      const compilers = currentProblem?.compilers || []
      if (compilers.length > 0) {
        setSelectedCompiler(compilers[0]) // Устанавливаем первый компилятор как выбранный
      }
    }
  }, [problems, selectedCompiler, alias, setSelectedCompiler])

  if (isLoading || isError || !problems) {
    return <div>Loading...</div> // Добавить свой лоадер
  }

  const currentProblem = problems.find(problem => problem.alias === alias) // Находим текущую задачу по alias
  const compilers = currentProblem?.compilers || []

  return (
    <SelectCompiler
      compilers={compilers}
      selectedCompiler={selectedCompiler}
      setSelectedCompiler={setSelectedCompiler}
    />
  )
}
