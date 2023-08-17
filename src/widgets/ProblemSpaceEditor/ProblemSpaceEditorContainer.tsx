import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { CodeHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { useGetCurrentUserQuery } from '@store/api/api'

import { CodeContext } from '@contexts/codeContext'

import { ProblemSpaceEditor } from './ProblemSpaceEditor'

export const ProblemSpaceEditorContainer: FC = () => {
  const [code, setCode] = useState<string>('')
  const [selectedCompiler, setSelectedCompiler] = useState<string>('')

  const { trainingSessionId, alias } = useParams()

  const { data: currentUser } = useGetCurrentUserQuery()

  const onSendCode = () => {
    console.log('Selected compiler:', selectedCompiler)
    api.postSubmissions(trainingSessionId, code, selectedCompiler, alias).then(console.log).catch(console.log)
  }

  const onCodeChange = (code: string) => {
    setCode(code)

    workSpaceSocket.sendCode({ code, problemAlias: alias, userId: currentUser.id })
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

    return workSpaceSocket.subscribeEditor(codeEventHandler)
  }, [alias])

  return (
    <CodeContext.Provider value={{ code, onSendCode, onCodeChange, selectedCompiler, setSelectedCompiler }}>
      <ProblemSpaceEditor />
    </CodeContext.Provider>
  )
}
