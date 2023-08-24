import { useState } from 'react'

import { UserHandler, UserLeaveHandler } from '@sockets/types'

import { IYandexUser } from '../types/types'

export const useOnlineUsers = () => {
  const [users, setUsers] = useState<IYandexUser[]>([])

  const userEventHandler: UserHandler = ({ user }) => {
    setUsers(prev => {
      const isDisplayed = !!prev.find(({ id }) => user.id === id)

      if (!isDisplayed) {
        return [...prev, user]
      }

      return prev
    })

  }

  const userLeaveEventHandler: UserLeaveHandler = ({ userId }) => {
    setUsers(prev => prev.filter(({ id }) => id !== userId))
  }

  return { users, setUsers, userEventHandler, userLeaveEventHandler }
}
