import { createContext } from 'react'

interface State {
  selectedContestId: string
}

export const SelectedContestContext = createContext<State>(null)
