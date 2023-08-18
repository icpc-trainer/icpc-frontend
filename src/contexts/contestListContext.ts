import { createContext } from 'react'

interface State {
  selectedContestId: string
  onSelectContest: (contestId: string) => void
}

export const ContestListContext = createContext<State>(null)
