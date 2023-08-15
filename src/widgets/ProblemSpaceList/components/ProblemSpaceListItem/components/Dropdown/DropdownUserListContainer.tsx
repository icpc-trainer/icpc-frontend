import React, { useEffect, useState } from 'react'

import { socket } from '@sockets/socket'
import { UserHandler, UserLeaveHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'

import { IYandexUser } from 'src/types/types'

import { DropdownUserList } from './DropdownUserList'
import { useParams } from 'react-router'

export const DropdownUserListContainer = () => {
  const [onlineUsers, setOnlineUsers] = useState<IYandexUser[]>([])
const {alias} = useParams();
  useEffect(() => {
    api.getOnlineUsers(trainingSessionId).then(setOnlineUsers).catch(console.log)
  }, [])

  const onSendProblemAssign = (user:IYandexUser, problemAlias:string) => {
    socket.sendProblemAssigned({ user, problemAlias })
  }

  return <DropdownUserList problemAlias={alias} onlineUsers={onlineUsers} onSendProblemAssign={onSendProblemAssign}/>
}
