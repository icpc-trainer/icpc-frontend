import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IYandexUser } from 'src/types/types'

import { ControlStatusContainer } from '../ControlStatus/ControlStatusContainer'

import styles from './OnlineUser.module.css'

interface HeaderUserProps {
  yandexUser: IYandexUser
}

export const OnlineUser: FC<HeaderUserProps> = ({ yandexUser }) => {
  const avatarUrl = getAvatarUrl(yandexUser.default_avatar_id)

  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img className={styles.avatarImg} src={avatarUrl} alt="avatar" />
      </div>

      <ControlStatusContainer id={yandexUser.id} />
    </div>
  )
}
