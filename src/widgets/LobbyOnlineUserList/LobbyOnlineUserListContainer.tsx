import React from 'react'

import { LobbyOnlineUserList } from '@widgets/LobbyOnlineUserList/LobbyOnlineUserList'
import { useLobbyOnlineUsers } from "@hooks/useLobbyOnlineUsers"

export const LobbyOnlineUserListContainer = () => {
  const { users } = useLobbyOnlineUsers()

  return <LobbyOnlineUserList users={users} />
}
