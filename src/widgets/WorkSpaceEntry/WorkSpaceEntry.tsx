import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

import { api } from '@api/index'

import { Loading } from '@ui/Loading/Loading'

export const WorkSpaceEntry = () => {
  const { trainingSessionId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    api
      .getProblems(trainingSessionId)
      .then(problems => {
        problems.sort((a, b) => a.alias.localeCompare(b.alias))

        const alias = problems[0].alias
        navigate(`/workspace/${trainingSessionId}/${alias}`)
      })
      .catch(console.log)
  }, [])

  return <Loading />
}
