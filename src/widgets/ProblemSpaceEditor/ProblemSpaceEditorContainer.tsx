import React, { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { api } from "../../api"
import { trainingSessionId } from "../../constants/training-session-id"
import { getRunId } from "../../helpers/getRunId"
import { CodeHandler, ControlTakenHandler, socket } from "../../sockets"
import { useGetControlUserQuery, useGetYandexUserQuery } from "../../store/api/api"
import { ProblemSpaceEditor } from "./ProblemSpaceEditor"

export const ProblemSpaceEditorContainer: FC = () => {
  const { data: currentUser } = useGetYandexUserQuery()
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)

  const [codeState, setCodeState] = useState<string>("")
  const [isEditorDisabled, setIsEditorDisabled] = useState<boolean>(controlUser.userId !== currentUser.id)

  const { alias } = useParams()

  const { data: user } = useGetYandexUserQuery()

  const fetchSubmissionDetails = async (runId: number) => {
    try {
      const res = await api.getSubmissionsFull(trainingSessionId, runId)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const sendCode = async (code: string) => {
    try {
      const res = await api.postSubmissions(trainingSessionId, code, "nodejs_18", "E")
      const runId = getRunId(res.data)
      console.log(runId)
      fetchSubmissionDetails(runId) // вызываем функцию после получения runId
    } catch (error) {
      console.log(error)
    }
  }

  const onCodeChange = (code: string) => {
    setCodeState(code)

    socket.sendCode({ code, problemAlias: alias, userId: user.id })
  }

  const editorEventHandler: CodeHandler = ({ code, userId, problemAlias }) => {
    if (userId !== user.id && problemAlias === alias) {
      setCodeState(code)
    }
  }

  const controlTakenHandler: ControlTakenHandler = ({ userId }) => {
    setIsEditorDisabled(userId !== user.id)
  }

  useEffect(() => {
    api
      .getCodeByProblemAlias(trainingSessionId, alias)
      .then(({ code }) => setCodeState(code))
      .catch(console.log)

    const editorUnsubscribe = socket.subscribeEditor(editorEventHandler)
    const controlTakenUnsubscribe = socket.subscribeControlTaken(controlTakenHandler)

    return () => {
      editorUnsubscribe()
      controlTakenUnsubscribe()
    }
  }, [alias])

  return <ProblemSpaceEditor onCodeChange={onCodeChange} codeState={codeState} sendCode={sendCode} isEditorDisabled={isEditorDisabled} />
}
