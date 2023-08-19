import React from 'react'

import { useWorkSpaceOnlineUsers } from '@hooks/useWorkSpaceOnlineUsers'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'

export const OnlineUserListContainer = () => {
  const { users } = useWorkSpaceOnlineUsers()

  return <OnlineUserList users={users} />
}
