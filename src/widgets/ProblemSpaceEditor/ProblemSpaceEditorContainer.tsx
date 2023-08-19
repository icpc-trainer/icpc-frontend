import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { CodeHandler, CompilerSelectedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { useGetCurrentUserQuery } from '@store/api/api'

import { CodeContext } from '@contexts/codeContext'

import { ProblemSpaceEditor } from './ProblemSpaceEditor'

export const ProblemSpaceEditorContainer: FC = () => {
  const [code, setCode] = useState<string>('')

  const [selectedCompiler, setSelectedCompiler] = useState<string>(null)
  const [compilers, setCompilers] = useState<string[]>(null)

  const { trainingSessionId, alias } = useParams()

  const { data: currentUser } = useGetCurrentUserQuery()

  const onSendCode = () => {
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

  const compilerSelectedEventHandler: CompilerSelectedHandler = ({ compiler, problemAlias }) => {
    if (alias === problemAlias) {
      setSelectedCompiler(compiler)
    }
  }

  useEffect(() => {
    Promise.all([api.getProblems(trainingSessionId), api.getSelectedCompilerByAlias(trainingSessionId, alias)])
      .then(([problems, selectedCompiler]) => {
        const problem = problems.find(problem => problem.alias === alias)

        setSelectedCompiler(selectedCompiler || problem.compilers[0])
        setCompilers(problem.compilers)
      })
      .catch(console.log)

    api
      .getCodeByAlias(trainingSessionId, alias)
      .then(({ code }) => setCode(code))
      .catch(console.log)

    const editorUnsubscribe = workSpaceSocket.subscribeEditor(codeEventHandler)
    const compilerSelectedUnsubscribe = workSpaceSocket.subscribeCompilerSelected(compilerSelectedEventHandler)

    return () => {
      editorUnsubscribe()
      compilerSelectedUnsubscribe()
    }
  }, [alias])

  return (
    <CodeContext.Provider value={{ code, onSendCode, onCodeChange, selectedCompiler, setSelectedCompiler, compilers }}>
      <ProblemSpaceEditor />
    </CodeContext.Provider>
  )
}
