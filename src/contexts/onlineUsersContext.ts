import { createContext } from 'react'
import { IYandexUser } from 'src/types/types'

interface State {
  users: IYandexUser[]
}

export const OnlineUsersContext = createContext<State>({users:[]})
