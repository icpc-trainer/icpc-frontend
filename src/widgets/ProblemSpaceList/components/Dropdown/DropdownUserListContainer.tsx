import React from 'react'

import { DropdownUserList } from './DropdownUserList'
import { DefaultUserDropdownContainer } from "@widgets/ProblemSpaceList/components/DefaultUserDropdown/DefaultUserDropdownContainer"
import { useWorkSpaceOnlineUsers } from "@hooks/useWorkSpaceOnlineUsers"

export const DropdownUserListContainer = () => {
 const { users } = useWorkSpaceOnlineUsers()

  return (
    <>
      <DropdownUserList users={users} />
      <DefaultUserDropdownContainer />
    </>
  )
}
