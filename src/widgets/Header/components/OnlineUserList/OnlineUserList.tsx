import React, { FC } from 'react'

import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'
import { OnlineUser } from '@widgets/Header/components/OnlineUser/OnlineUser'

import { IYandexUser } from '../../../../types/types'

import styles from './OnlineUserList.module.css'

interface OnlineUserListProps {
  users: IYandexUser[]
}

export const OnlineUserList: FC<OnlineUserListProps> = ({ users }) => {
  const getOnlineUserKey: GetItemKeyFunction<IYandexUser> = user => user.id
  const renderOnlineUser: RenderItemFunction<IYandexUser> = user => <OnlineUser yandexUser={user} />

  return (
    <List<IYandexUser>
      data={users}
      getItemKey={getOnlineUserKey}
      renderItem={renderOnlineUser}
      listClassName={styles.onlineUserList}
    />
  )
}
