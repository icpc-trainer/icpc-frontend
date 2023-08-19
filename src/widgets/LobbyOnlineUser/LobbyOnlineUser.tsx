import React, { FC } from 'react'

import { UserAvatar } from '@widgets/UserAvatar/UserAvatar'

import { IYandexUser } from '../../types/types'

interface LobbyOnlineUserProps {
  user: IYandexUser
}

export const LobbyOnlineUser: FC<LobbyOnlineUserProps> = ({ user }) => {
  return <UserAvatar user={user} width={40} height={40} fontSize={16} />
}
