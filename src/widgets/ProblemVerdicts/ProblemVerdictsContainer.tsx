import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { api } from '../../api'
import { trainingSessionId } from '../../constants/training-session-id'
import { VerdictRetrievedHandler, socket } from '../../sockets'
import { Submission } from '../../types/types'
import { ProblemVerdicts } from './ProblemVerdicts'

export const ProblemVerdictsContainer: FC = () => {
  const { alias } = useParams()

  const [verdicts, setVerdicts] = useState<Submission[]>([])

  const verdictRetrievedEventHandler: VerdictRetrievedHandler = (newVerdict) => {
    setVerdicts((prev) => {
      const currVerdict = prev.find(({ id }) => id === newVerdict.id)

      if (!currVerdict) {
        return [newVerdict, ...prev]
      } else {
        return prev.map((verdict) => (verdict.id === newVerdict.id ? newVerdict : verdict))
      }
    })
  }

  useEffect(() => {
    api
      .getVerdictsByAlias(trainingSessionId, alias)
      .then(({ submissions }) => setVerdicts(submissions.sort((a, b) => b.timeFromStart - a.timeFromStart)))
      .catch(console.log)

    return socket.subscribeVerdictRetrieved(verdictRetrievedEventHandler)
  }, [alias])

  return <ProblemVerdicts verdicts={verdicts} />
}
