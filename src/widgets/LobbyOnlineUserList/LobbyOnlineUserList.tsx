import React, { FC } from 'react'

import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'
import { LobbyOnlineUser } from '@widgets/LobbyOnlineUser/LobbyOnlineUser'

import { IYandexUser } from '../../types/types'

import styles from './LobbyOnlineUserList.module.css'

interface LobbyOnlineUserListProps {
  users: IYandexUser[]
}

export const LobbyOnlineUserList: FC<LobbyOnlineUserListProps> = ({ users }) => {
  const getUserKey: GetItemKeyFunction<IYandexUser> = user => user.id
  const renderUser: RenderItemFunction<IYandexUser> = user => <LobbyOnlineUser user={user} />

  return (
    <List listClassName={styles.lobbyOnlineUserList} data={users} getItemKey={getUserKey} renderItem={renderUser} />
  )
}

