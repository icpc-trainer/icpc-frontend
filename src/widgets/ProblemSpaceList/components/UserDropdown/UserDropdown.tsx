import React, { FC } from 'react'

import { UserAvatar } from '@widgets/UserAvatar/UserAvatar'

import { IYandexUser } from 'src/types/types'

import styles from './UserDropdown.module.css'

interface UserDropdownProps {
  user: IYandexUser
  onSendProblemAssign: () => void
}

export const UserDropdown: FC<UserDropdownProps> = ({ user, onSendProblemAssign }) => {
  return (
    <button className={styles.userDropdownButton} onClick={onSendProblemAssign}>
      <UserAvatar user={user} width={24} height={24} fontSize={11} />
    </button>
  )
}
