import React, { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { socket } from '@sockets/socket'
import { ProblemAssignedHandler, ProblemStatusUpdatedHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { IProblem } from 'src/types/types'

import { ProblemSpaceList } from './ProblemSpaceList'

export const ProblemSpaceListContainer: FC = () => {
  const [problems, setProblems] = useState<IProblem[]>([])
  const { alias } = useParams();
  const navigate = useNavigate()

  const contestId = '51004' // мокаем contestId

  const handleProblemSpaceClick = useCallback((problem: IProblem) => {
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
        if (!alias || !problems.some(problem => problem.alias === alias)) {
          navigate(`/workspace/${contestId}/${problems[0].alias}`) // перенаправление только если alias не определен или не найден
        }
      })
      .catch(console.log)
    socket.subscribeProblemStatusUpdated(problemStatusUpdatedEventHandler)
    socket.subscribeProblemAssigned(problemAssignedEventHandler)
  }, [])

  return <ProblemSpaceList problems={problems} handleProblemSpaceClick={handleProblemSpaceClick} />
}
