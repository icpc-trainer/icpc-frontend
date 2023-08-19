import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IYandexUser } from 'src/types/types'

import styles from './UserDropdown.module.css'

interface UserDropdownProps {
  user: IYandexUser
  onSendProblemAssign: () => void
  hasAvatar: boolean
}

export const UserDropdown: FC<UserDropdownProps> = ({ user, onSendProblemAssign, hasAvatar }) => {
  const avatarUrl = getAvatarUrl(user.default_avatar_id)
  const initials = `${user.first_name[0]}${user.last_name[0]}`

  return hasAvatar ? (
    <img
      src={avatarUrl}
      className={styles.userDropdown}
      alt="avatar"
      onClick={onSendProblemAssign}
    />
  ) : (
    <div className={styles.avatarPlaceholder}>{initials}</div>
  )
}
