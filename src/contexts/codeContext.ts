import { createContext } from 'react'

import { ICompilerFull } from '@constants/compilers'

interface State {
  code: string
  selectedCompiler: ICompilerFull
  onSendCode: () => void
  onCodeChange: (code: string) => void
  setSelectedCompiler: (compiler: ICompilerFull) => void
  compilers: ICompilerFull[]
}

export const CodeContext = createContext<State>(null)
