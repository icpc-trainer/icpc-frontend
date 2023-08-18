import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { lobbySocket } from '@sockets/lobby-socket'
import { UserHandler, UserLeaveHandler } from '@sockets/types'

import { api } from '@api/index'

import { LobbyOnlineUserList } from '@widgets/LobbyOnlineUserList/LobbyOnlineUserList'

import { IYandexUser } from '../../types/types'

export const LobbyOnlineUserListContainer = () => {
  const { teamId } = useParams()

  const [users, setUsers] = useState<IYandexUser[]>([])

  const userEventHandler: UserHandler = ({ user }) => {
    const isDisplayed = !!users.find(({ id }) => user.id)

    if (!isDisplayed) {
      setUsers(prev => [...prev, user])
    }
  }

  const userLeaveEventHandler: UserLeaveHandler = ({ userId }) => {
    setUsers(prev => prev.filter(({ id }) => id !== userId))
  }

  useEffect(() => {
    api.getLobbyOnlineUsers(teamId).then(setUsers).catch(console.log)

    const userUnsubscribe = lobbySocket.subscribeUser(userEventHandler)
    const userLeaveUnsubscribe = lobbySocket.subscribeUserLeave(userLeaveEventHandler)

    return () => {
      userUnsubscribe()
      userLeaveUnsubscribe()
    }
  }, [])

  return <LobbyOnlineUserList users={users} />
}
