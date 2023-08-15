import { createContext } from 'react'

interface State {
  code: string
  onSendCode: () => void
  onCodeChange: (code: string) => void
}

export const CodeContext = createContext<State>(null)
