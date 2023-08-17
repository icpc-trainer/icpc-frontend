import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { workSpaceSocket } from '@sockets/work-space-socket'
import { ProblemStatusUpdatedHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { Status } from './Status'

export const StatusContainer = () => {
  const { alias } = useParams()

  const [status, setStatus] = useState<string>('')

  const problemStatusUpdatedEventHandler: ProblemStatusUpdatedHandler = ({ status, problemAlias }) => {
    if (alias === problemAlias) {
      setStatus(status)
    }
  }

  useEffect(() => {
    if(alias) {
      api
        .getProblemByAlias(trainingSessionId, alias)
        .then(({ status }) => setStatus(status))
        .catch((console.log))
    }

    return workSpaceSocket.subscribeProblemStatusUpdated(problemStatusUpdatedEventHandler)
  }, [alias])

  if (!status) return null

  return <Status status={status} />
}
