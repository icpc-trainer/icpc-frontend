import { useEffect } from 'react'
import { useParams } from 'react-router'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { useOnlineUsers } from '@hooks/useOnlineUsers'

export const useWorkSpaceOnlineUsers = () => {
  const { trainingSessionId } = useParams()

  const { users, setUsers, userEventHandler, userLeaveEventHandler } = useOnlineUsers()

  useEffect(() => {
    api.getWorkSpaceOnlineUsers(trainingSessionId).then(setUsers).catch(console.log)

    const userUnsubscribe = workSpaceSocket.subscribeUser(userEventHandler)
    const userLeaveUnsubscribe = workSpaceSocket.subscribeUserLeave(userLeaveEventHandler)

    return () => {
      userUnsubscribe()
      userLeaveUnsubscribe()
    }
  }, [])

  return { users }
}
