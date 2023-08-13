import React, { FC, useEffect, useState } from "react"

import { VerdictRetrievedHandler, socket } from "../../sockets"
import { Submission } from "../../types/types"
import { ProblemVerdicts } from "./ProblemVerdicts"
import { trainingSessionId } from "../../constants/training-session-id"
import { useParams } from "react-router"
import { api } from "../../api"

export const ProblemVerdictsContainer: FC = () => {
  const { alias } = useParams()

  const [verdicts, setVerdicts] = useState<Submission[]>([])

  const verdictRetrievedEventHandler: VerdictRetrievedHandler = (verdict) => {
    setVerdicts((prev) => [verdict, ...prev])
  }

  useEffect(() => {
    api.getVerdictsByAlias(trainingSessionId, alias)
      .then(({ submissions }) => setVerdicts(submissions.sort((a, b) => b.timeFromStart - a.timeFromStart)))
      .catch(console.log)

    return socket.subscribeVerdictRetrieved(verdictRetrievedEventHandler)
  }, [alias])

  return <ProblemVerdicts verdicts={verdicts} />
}
