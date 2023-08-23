import React, { useContext } from 'react'

import { DefaultUserDropdownContainer } from '@widgets/ProblemSpaceList/components/DefaultUserDropdown/DefaultUserDropdownContainer'

import { DropdownUserList } from './DropdownUserList'
import { OnlineUsersContext } from '@contexts/onlineUsersContext'

export const DropdownUserListContainer = () => {
  const { users } = useContext(OnlineUsersContext)

  return (
    <>
      <DropdownUserList users={users} />
      <DefaultUserDropdownContainer />
    </>
  )
}
