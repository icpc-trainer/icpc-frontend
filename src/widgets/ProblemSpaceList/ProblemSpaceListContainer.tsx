import React, { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { ProblemAssignedHandler, ProblemStatusUpdatedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { IProblem } from 'src/types/types'

import { ProblemSpaceList } from './ProblemSpaceList'

export const ProblemSpaceListContainer: FC = () => {
  const [problems, setProblems] = useState<IProblem[]>([])

  const { trainingSessionId, alias } = useParams()

  const navigate = useNavigate()

  const contestId = '51004' // мокаем contestId

  const handleProblemSpaceClick = useCallback((problem: IProblem) => {
    navigate(`/workspace/${trainingSessionId}/${problem.alias}`)
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

  const problemAssignedEventHandler: ProblemAssignedHandler = ({ user, problemAlias }) => {
    setProblems(prev =>
      prev.map(problem => {
        if (problem.alias === problemAlias) {
          return { ...problem, assignedUser: user }
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
      })
      .catch(console.log)

    const problemStatusUpdatedUnsubscribe = workSpaceSocket.subscribeProblemStatusUpdated(
      problemStatusUpdatedEventHandler,
    )

    const problemAssignedUnsubscribe = workSpaceSocket.subscribeProblemAssigned(problemAssignedEventHandler)

    return () => {
      problemStatusUpdatedUnsubscribe()
      problemAssignedUnsubscribe()
    }
  }, [])

  return <ProblemSpaceList problems={problems} handleProblemSpaceClick={handleProblemSpaceClick} />
}
