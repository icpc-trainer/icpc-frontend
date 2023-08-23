import React, { useContext } from 'react'

import { OnlineUsersContext } from '@contexts/onlineUsersContext'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'

export const OnlineUserListContainer = () => {
  const { users } = useContext(OnlineUsersContext)

  return <OnlineUserList users={users} />
}
