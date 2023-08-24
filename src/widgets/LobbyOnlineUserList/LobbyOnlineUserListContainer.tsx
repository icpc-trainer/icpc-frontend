import React from 'react'

import { useLobbyOnlineUsers } from '@hooks/useLobbyOnlineUsers'

import { LobbyOnlineUserList } from '@widgets/LobbyOnlineUserList/LobbyOnlineUserList'

export const LobbyOnlineUserListContainer = () => {
  const { users } = useLobbyOnlineUsers()
  return <LobbyOnlineUserList users={users} />
}
