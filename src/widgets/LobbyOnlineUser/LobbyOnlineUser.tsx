import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IYandexUser } from '../../types/types'

import styles from './LobbyOnlineUser.module.css'

interface LobbyOnlineUserProps {
  user: IYandexUser
}

export const LobbyOnlineUser: FC<LobbyOnlineUserProps> = ({ user }) => {
  const avatarUrl = getAvatarUrl(user.default_avatar_id)

  return <img src={avatarUrl} className={styles.lobbyOnlineUser} />
}
