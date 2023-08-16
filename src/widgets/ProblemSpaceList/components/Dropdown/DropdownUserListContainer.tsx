import React, { useEffect, useState } from 'react'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { IYandexUser } from 'src/types/types'

import { DefaultUserDropdown } from '../UserDropdown/DefaultUserDropdown'
import { DropdownUserList } from './DropdownUserList'

export const DropdownUserListContainer = () => {
  const [onlineUsers, setOnlineUsers] = useState<IYandexUser[]>([])

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
