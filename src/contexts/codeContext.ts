import { createContext } from 'react'

interface State {
  code: string
  selectedCompiler: string
  onSendCode: () => void
  onCodeChange: (code: string) => void
  setSelectedCompiler: (compiler: string) => void
}

export const CodeContext = createContext<State>(null)
