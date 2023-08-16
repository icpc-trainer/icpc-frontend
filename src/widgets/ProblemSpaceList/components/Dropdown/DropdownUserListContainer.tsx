import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { socket } from '@sockets/socket'
import { UserHandler, UserLeaveHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'
import { ProblemItemContext } from '@contexts/problemItemContext'

import { User } from '@icons/User'
import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'

import { IYandexUser } from 'src/types/types'

import { DefaultUserDropdown } from '../UserDropdown/DefaultUserDropdown'
import { DropdownUserList } from './DropdownUserList'

export const DropdownUserListContainer = () => {
  const [onlineUsers, setOnlineUsers] = useState<IYandexUser[]>([])
  const { problem } = useContext(ProblemItemContext)

  useEffect(() => {
    api.getOnlineUsers(trainingSessionId).then(setOnlineUsers).catch(console.log)
  }, [])

  return (
    <>
      <DropdownUserList onlineUsers={onlineUsers} />
      <DefaultUserDropdown />
    </>
  )
}
