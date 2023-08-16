import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IProblem, IYandexUser } from 'src/types/types'

import { IconBaseProps } from '../../../../ui/icons/types'

import styles from './UserDropdown.module.css'

interface UserDropdownProps {
  user: IYandexUser
  onSendProblemAssign: () => void
}

export const UserDropdown: FC<UserDropdownProps> = ({ user, onSendProblemAssign }) => {
  const avatarUrl = getAvatarUrl(user.default_avatar_id)
  return (
    <img
      width={24}
      height={24}
      src={avatarUrl}
      className={styles.userDropdown}
      alt="avatar"
      onClick={() => onSendProblemAssign()}
    />
  )
}
