import React, { FC } from 'react'

import { User } from '@icons/User'
import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'
import { OnlineUser } from '@widgets/Header/components/OnlineUser/OnlineUser'
import { UserDropdownContainer } from '@widgets/ProblemSpaceList/components/UserDropdown/UserDropdownContainer'

import { IYandexUser } from 'src/types/types'

import styles from './DropdownUserList.module.css'

interface DropdownUserListProps {
  users: IYandexUser[]
}

export const DropdownUserList: FC<DropdownUserListProps> = ({ users }) => {
  const getOnlineUserKey: GetItemKeyFunction<IYandexUser> = user => user.id
  const renderOnlineUser: RenderItemFunction<IYandexUser> = user => <UserDropdownContainer user={user} />

  return (
    <List<IYandexUser>
      data={users}
      getItemKey={getOnlineUserKey}
      renderItem={renderOnlineUser}
      listClassName={styles.dropdownUserList}
    />
  )
}
