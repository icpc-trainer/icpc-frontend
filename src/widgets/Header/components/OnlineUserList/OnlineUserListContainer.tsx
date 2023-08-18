import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { UserHandler, UserLeaveHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'

import { IYandexUser } from '../../../../types/types'

export const OnlineUserListContainer = () => {
  const { trainingSessionId } = useParams()

  const [onlineUsers, setOnlineUsers] = useState<IYandexUser[]>([])

  const userEventHandler: UserHandler = ({ user }) => {
    setOnlineUsers(prev => [...prev, user])
  }

  const userLeaveEventHandler: UserLeaveHandler = ({ userId }) => {
    setOnlineUsers(prev => prev.filter(user => user.id !== userId))
  }

  useEffect(() => {
    api.getWorkSpaceOnlineUsers(trainingSessionId).then(setOnlineUsers).catch(console.log)

    const userUnsubscribe = workSpaceSocket.subscribeUser(userEventHandler)
    const userLeaveUnsubscribe = workSpaceSocket.subscribeUserLeave(userLeaveEventHandler)

    return () => {
      userUnsubscribe()
      userLeaveUnsubscribe()
    }
  }, [])

  return <OnlineUserList onlineUsers={onlineUsers} />
}
