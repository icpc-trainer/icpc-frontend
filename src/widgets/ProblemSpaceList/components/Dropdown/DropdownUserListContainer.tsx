import React from 'react'

import { useWorkSpaceOnlineUsers } from '@hooks/useWorkSpaceOnlineUsers'

import { DefaultUserDropdownContainer } from '@widgets/ProblemSpaceList/components/DefaultUserDropdown/DefaultUserDropdownContainer'

import { DropdownUserList } from './DropdownUserList'

export const DropdownUserListContainer = () => {
  const { users } = useWorkSpaceOnlineUsers()

  return (
    <>
      <DropdownUserList users={users} />
      <DefaultUserDropdownContainer />
    </>
  )
}
