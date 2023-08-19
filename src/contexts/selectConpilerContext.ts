import { createContext } from 'react'

import { IProblem } from 'src/types/types'

interface State {
  problem: IProblem
  onCloseDropdown: () => void
}

export const SelectCompilerContext = createContext<State>(null)
