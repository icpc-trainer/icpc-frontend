import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { CodeHandler, CompilerSelectedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { useGetCurrentUserQuery } from '@store/api/api'

import { ICompilerFull, compilersFull } from '@constants/compilers'
import { CodeContext } from '@contexts/codeContext'

import { ProblemSpaceEditor } from './ProblemSpaceEditor'

export const ProblemSpaceEditorContainer: FC = () => {
  const [code, setCode] = useState<string>('')

  const [selectedCompiler, setSelectedCompiler] = useState<ICompilerFull>(null)
  const [compilers, setCompilers] = useState<ICompilerFull[]>(null)
  const [isSameCode, setIsSameCode] = useState(false)

  const { trainingSessionId, alias } = useParams()

  const { data: currentUser } = useGetCurrentUserQuery()

  const onSendCode = () => {
    api
      .postSubmissions(trainingSessionId, code, selectedCompiler.id, alias)
      .then(() => {
        setIsSameCode(false)
      })
      .catch(err => {
        const message = err.response?.data?.detail?.message

        if (message && /Duplicate submission/.test(message)) {
          setIsSameCode(true)
        }
      })
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
      setSelectedCompiler(compilersFull.find(({ id }) => id === compiler))
    }
  }

  useEffect(() => {
    Promise.all([api.getProblems(trainingSessionId), api.getSelectedCompilerByAlias(trainingSessionId, alias)])
      .then(([problems, selectedCompiler]) => {
        const problem = problems.find(problem => problem.alias === alias)
        const compilers = problem.compilers
          .filter(compiler => !!compilersFull.find(({ id }) => id === compiler))
          .map(compiler => compilersFull.find(({ id }) => id === compiler))

        const compiler = compilersFull.find(({ id }) => id === selectedCompiler) || compilers[0]

        setSelectedCompiler(compiler)
        setCompilers(compilers)
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
    <CodeContext.Provider
      value={{ code, onSendCode, onCodeChange, selectedCompiler, setSelectedCompiler, compilers, isSameCode }}
    >
      <ProblemSpaceEditor />
    </CodeContext.Provider>
  )
}
