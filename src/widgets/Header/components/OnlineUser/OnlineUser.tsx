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
  const hasAvatar = yandexUser.default_avatar_id === '0/0-0' ? false : true

  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        {hasAvatar ? (
          <img className={styles.avatarImg} src={avatarUrl} alt="avatar" />
        ) : (
          <div className={styles.avatarPlaceholder}>{`${yandexUser.first_name[0]}${yandexUser.last_name[0]}`}</div>
        )}
      </div>
      <ControlStatusContainer id={yandexUser.id} />
    </div>
  )
}
