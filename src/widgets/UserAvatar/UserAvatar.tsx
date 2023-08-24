import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IYandexUser } from '../../types/types'

import styles from './UserAvatar.module.css'

interface UserAvatarProps {
  user: IYandexUser
  width: number
  height: number
  fontSize: number
}

export const UserAvatar: FC<UserAvatarProps> = ({ user, width, height, fontSize }) => {
  const url = getAvatarUrl(user.default_avatar_id)
  const hasAvatar = !user.is_avatar_empty
  const initials = `${user.first_name[0]}${user.last_name[0]}`

  return hasAvatar ? (
    <div style={{ width, height, fontSize }} className={styles.userAvatarPlaceholder}>
      {initials}  
    </div>
  ) : (
    <img width={width} height={height} className={styles.userAvatar} src={url} alt="avatar" />
  )
}
