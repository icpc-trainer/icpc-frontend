import * as React from 'react'
import { FC, useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../api'
import { Problem, Problems } from '../../types/types'
import { BlockWrapper } from '../../ui/BlockWrapper/BlockWrapper'
import { Loading } from '../../ui/Loading/Loading'
import { ProblemSpaceList } from './ProblemSpaceList'

export const ProblemSpaceListContainer = () => {
  const { alias: currentAlias } = useParams()
  const navigate = useNavigate()
  const contestId = '51004' // мокаем contestId

  const {
    data: problems,
    isLoading,
    isError,
  } = useQuery('problems', () => api.getProblems(contestId), {
    onSuccess: (problems: Problems) => {
      problems.sort((a, b) => a.alias.localeCompare(b.alias))
      navigate(`/workspace/${contestId}/${problems[0].alias}`)
    },
  })

  const handleProblemSpaceClick = useCallback((problem: Problem) => {
    navigate(`/workspace/${contestId}/${problem.alias}`)
  }, [])

  if (isLoading) {
    return (
      <BlockWrapper>
        <Loading />
      </BlockWrapper>
    )
  }

  if (isError) {
    return (
      <BlockWrapper>
        <div>error</div>
      </BlockWrapper>
    )
  }
  return (
    <ProblemSpaceList
      problems={problems}
      handleProblemSpaceClick={handleProblemSpaceClick}
      contestId={contestId}
      currentAlias={currentAlias}
    />
  )
}
