import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { IYandexUser } from 'src/types/types'

import { DefaultUserDropdown } from '../UserDropdown/DefaultUserDropdown'
import { DropdownUserList } from './DropdownUserList'

export const DropdownUserListContainer = () => {
  const { trainingSessionId } = useParams()

  const [onlineUsers, setOnlineUsers] = useState<IYandexUser[]>([])

  useEffect(() => {
    api.getWorkSpaceOnlineUsers(trainingSessionId).then(setOnlineUsers).catch(console.log)
  }, [])

  return (
    <>
      <DropdownUserList onlineUsers={onlineUsers} />
      <DefaultUserDropdown />
    </>
  )
}
