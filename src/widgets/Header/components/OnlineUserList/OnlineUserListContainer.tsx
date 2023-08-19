import React from 'react'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'
import { useWorkSpaceOnlineUsers } from "@hooks/useWorkSpaceOnlineUsers"

export const OnlineUserListContainer = () => {
  const { users } = useWorkSpaceOnlineUsers()

  return <OnlineUserList users={users} />
}
