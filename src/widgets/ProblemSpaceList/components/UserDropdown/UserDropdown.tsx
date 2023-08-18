import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IProblem, IYandexUser } from 'src/types/types'

import { IconBaseProps } from '../../../../ui/icons/types'

import styles from './UserDropdown.module.css'

interface UserDropdownProps {
  user: IYandexUser
  onSendProblemAssign: () => void
  hasAvatar: boolean
}

export const UserDropdown: FC<UserDropdownProps> = ({ user, onSendProblemAssign, hasAvatar }) => {
  const avatarUrl = getAvatarUrl(user.default_avatar_id)
  return hasAvatar ? (
    <img
      width={24}
      height={24}
      src={avatarUrl}
      className={styles.userDropdown}
      alt="avatar"
      onClick={() => onSendProblemAssign()}
    />
  ) : (
    <div className={styles.avatarPlaceholder}>{`${user.first_name[0]}${user.last_name[0]}`}</div>
  )
}
