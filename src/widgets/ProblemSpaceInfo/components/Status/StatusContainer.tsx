import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { ProblemStatusUpdatedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { Status } from './Status'

export const StatusContainer = () => {
  const { trainingSessionId, alias } = useParams()

  const [status, setStatus] = useState<string>('')

  const problemStatusUpdatedEventHandler: ProblemStatusUpdatedHandler = ({ status, problemAlias }) => {
    if (alias === problemAlias) {
      setStatus(status)
    }
  }

  useEffect(() => {
    if (alias) {
      api
        .getProblemByAlias(trainingSessionId, alias)
        .then(({ status }) => setStatus(status))
        .catch(console.log)
    }

    return workSpaceSocket.subscribeProblemStatusUpdated(problemStatusUpdatedEventHandler)
  }, [alias])

  if (!status) return null

  return <Status status={status} />
}
