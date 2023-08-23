import React, { useContext } from 'react'

import { OnlineUsersContext } from '@contexts/onlineUsersContext'

import { DefaultUserDropdownContainer } from '@widgets/ProblemSpaceList/components/DefaultUserDropdown/DefaultUserDropdownContainer'

import { DropdownUserList } from './DropdownUserList'

export const DropdownUserListContainer = () => {
  const { users } = useContext(OnlineUsersContext)

  return (
    <>
      <DropdownUserList users={users} />
      <DefaultUserDropdownContainer />
    </>
  )
}
