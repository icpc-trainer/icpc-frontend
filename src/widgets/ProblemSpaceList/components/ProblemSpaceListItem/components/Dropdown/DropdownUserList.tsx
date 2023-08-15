import React, { FC } from 'react'

import { User } from '@icons/User'
import { UserDropdown } from '@icons/UserDropdown'
import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'
import { OnlineUser } from '@widgets/Header/components/OnlineUser/OnlineUser'

import { IYandexUser } from 'src/types/types'

import styles from './DropdownUserList.module.css'

interface DropdownUserListProps {
  onlineUsers: IYandexUser[]
  onSendProblemAssign: (user: IYandexUser, problemAlias: string) => void
  problemAlias:string
}

export const DropdownUserList: FC<DropdownUserListProps> = ({ onlineUsers, onSendProblemAssign, problemAlias }) => {
  const getOnlineUserKey: GetItemKeyFunction<IYandexUser> = user => user.id
  const renderOnlineUser: RenderItemFunction<IYandexUser> = user => (
    <UserDropdown width={24} height={24} yandexUser={user} onSendProblemAssign={onSendProblemAssign} problemAlias={problemAlias}/>
  )

  return (
    <List<IYandexUser>
      data={onlineUsers}
      getItemKey={getOnlineUserKey}
      renderItem={renderOnlineUser}
      listClassName={styles.dropdownUserList}
    />
  )
}
