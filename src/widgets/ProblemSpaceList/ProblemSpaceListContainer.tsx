import React, { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { socket } from '@sockets/socket'
import { ProblemStatusUpdatedHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { Problem } from 'src/types/types'

import { ProblemSpaceList } from './ProblemSpaceList'

export const ProblemSpaceListContainer: FC = () => {
  const [problems, setProblems] = useState<Problem[]>([])

  const { alias } = useParams()

  const navigate = useNavigate()

  const contestId = '51004' // мокаем contestId

  const handleProblemSpaceClick = useCallback((problem: Problem) => {
    navigate(`/workspace/${contestId}/${problem.alias}`)
  }, [])

  const problemStatusUpdatedEventHandler: ProblemStatusUpdatedHandler = ({ status, problemAlias }) => {
    setProblems(prev =>
      prev.map(problem => {
        if (problem.alias === problemAlias) {
          return { ...problem, status }
        }

        return problem
      }),
    )
  }

  useEffect(() => {
    api
      .getProblems(trainingSessionId)
      .then(problems => {
        problems.sort((a, b) => a.alias.localeCompare(b.alias))
        setProblems(problems)
        navigate(`/workspace/${contestId}/${problems[0].alias}`)
      })
      .catch(console.log)

    return socket.subscribeProblemStatusUpdated(problemStatusUpdatedEventHandler)
  }, [])

  return (
    <ProblemSpaceList
      problems={problems}
      handleProblemSpaceClick={handleProblemSpaceClick}
      contestId={contestId}
      currentAlias={alias}
    />
  )
}
