import { createContext } from 'react'
import { IProblem } from 'src/types/types'

interface State {
  problem: IProblem
}

export const ProblemItemContext = createContext<State>(null)
