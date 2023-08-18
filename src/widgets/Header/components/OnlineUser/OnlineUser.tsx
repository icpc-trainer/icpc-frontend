import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IYandexUser } from 'src/types/types'

import { ControlStatusContainer } from '../ControlStatus/ControlStatusContainer'

import styles from './OnlineUser.module.css'

interface HeaderUserProps {
  yandexUser: IYandexUser
}

export const OnlineUser: FC<HeaderUserProps> = ({ yandexUser}) => {
  const avatarUrl = getAvatarUrl(yandexUser.default_avatar_id)
  const userInitials = 
    yandexUser.default_avatar_id === "0/0-0" 
    ? `${yandexUser.first_name[0]}. ${yandexUser.last_name[0]}.`
    : ""

  console.log(yandexUser)
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img className={styles.avatarImg} src={avatarUrl} alt="avatar" />
        {userInitials ?? <span>{userInitials}</span>}
      </div>
      <ControlStatusContainer id={yandexUser.id} />
    </div>
  )
}
