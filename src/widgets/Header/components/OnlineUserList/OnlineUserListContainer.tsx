import React, { useContext } from 'react'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'
import { OnlineUsersContext } from '@contexts/onlineUsersContext'

export const OnlineUserListContainer = () => {
  const { users } = useContext(OnlineUsersContext)

  return <OnlineUserList users={users} />
}
