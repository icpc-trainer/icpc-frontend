import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { socket } from '@sockets/socket'
import { CodeHandler } from '@sockets/types'

import { api } from '@api/index'

import { useGetCurrentUserQuery } from '@store/api/api'

import { trainingSessionId } from '@constants/training-session-id'
import { CodeContext } from '@contexts/codeContext'

import { ProblemSpaceEditor } from './ProblemSpaceEditor'

export const ProblemSpaceEditorContainer: FC = () => {
  const [code, setCode] = useState<string>('')
  const [selectedCompiler, setSelectedCompiler] = useState<string>('')

  const { alias } = useParams()

  const { data: currentUser } = useGetCurrentUserQuery()

  const onSendCode = () => {
    console.log('Selected compiler:', selectedCompiler)
    api.postSubmissions(trainingSessionId, code, selectedCompiler, alias).then(console.log).catch(console.log)
  }

  const onCodeChange = (code: string) => {
    setCode(code)

    socket.sendCode({ code, problemAlias: alias, userId: currentUser.id })
  }

  const codeEventHandler: CodeHandler = ({ code, userId, problemAlias }) => {
    if (userId !== currentUser.id && problemAlias === alias) {
      setCode(code)
    }
  }

  useEffect(() => {
    api
      .getCodeByAlias(trainingSessionId, alias)
      .then(({ code }) => setCode(code))
      .catch(console.log)

    return socket.subscribeEditor(codeEventHandler)
  }, [alias])

  return (
    <CodeContext.Provider value={{ code, onSendCode, onCodeChange, selectedCompiler, setSelectedCompiler }}>
      <ProblemSpaceEditor />
    </CodeContext.Provider>
  )
}
