import * as React from 'react'
import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../api'
import { trainingSessionId } from '../../constants/training-session-id'
import { ProblemStatusUpdatedHandler, socket } from '../../sockets'
import { Problem, Problems } from '../../types/types'
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
    setProblems((prev) =>
      prev.map((problem) => {
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
      .then((problems) => {
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
