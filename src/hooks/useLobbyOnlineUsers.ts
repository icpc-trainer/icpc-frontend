import { useEffect } from 'react'
import { useParams } from 'react-router'

import { lobbySocket } from '@sockets/lobby-socket'

import { api } from '@api/index'

import { useOnlineUsers } from '@hooks/useOnlineUsers'

export const useLobbyOnlineUsers = () => {
  const { teamId } = useParams()

  const { users, setUsers, userEventHandler, userLeaveEventHandler } = useOnlineUsers()

  useEffect(() => {
    api.getLobbyOnlineUsers(teamId).then(setUsers).catch(console.log)

    const userUnsubscribe = lobbySocket.subscribeUser(userEventHandler)
    const userLeaveUnsubscribe = lobbySocket.subscribeUserLeave(userLeaveEventHandler)

    return () => {
      userUnsubscribe()
      userLeaveUnsubscribe()
    }
  }, [])

  return { users }
}
