import React, { useEffect, useState } from 'react'

import { socket } from '@sockets/socket'
import { UserHandler, UserLeaveHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'

import { IYandexUser } from '../../../../types/types'

export const OnlineUserListContainer = () => {
  const [onlineUsers, setOnlineUsers] = useState<IYandexUser[]>([])

  const userEventHandler: UserHandler = ({ user }) => {
    setOnlineUsers(prev => [...prev, user])
  }

  const userLeaveEventHandler: UserLeaveHandler = ({ userId }) => {
    setOnlineUsers(prev => prev.filter(user => user.id !== userId))
  }

  useEffect(() => {
    api.getOnlineUsers(trainingSessionId).then(setOnlineUsers).catch(console.log)

    const userUnsubscribe = socket.subscribeUser(userEventHandler)
    const userLeaveUnsubscribe = socket.subscribeUserLeave(userLeaveEventHandler)

    return () => {
      userUnsubscribe()
      userLeaveUnsubscribe()
    }
  }, [])

  return <OnlineUserList onlineUsers={onlineUsers} />
}
