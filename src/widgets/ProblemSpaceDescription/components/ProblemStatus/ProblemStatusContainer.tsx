import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { api } from '../../../../api'
import { trainingSessionId } from '../../../../constants/training-session-id'
import { ProblemStatusUpdatedHandler, socket } from '../../../../sockets'
import { ProblemStatus } from './ProblemStatus'

export const ProblemStatusContainer = () => {
  const { alias } = useParams()

  const [status, setStatus] = useState<string>('')

  const problemStatusUpdatedEventHandler: ProblemStatusUpdatedHandler = ({ status, problemAlias }) => {
    if (alias === problemAlias) {
      setStatus(status)
    }
  }

  useEffect(() => {
    api
      .getProblemByAlias(trainingSessionId, alias)
      .then(({ status }) => setStatus(status))
      .catch(console.log)

    return socket.subscribeProblemStatusUpdated(problemStatusUpdatedEventHandler)
  }, [alias])

  if (!status) return null

  return <ProblemStatus status={status} />
}
