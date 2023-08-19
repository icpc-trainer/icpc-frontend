import React, { FC } from 'react'

import { UserAvatar } from '@widgets/UserAvatar/UserAvatar'

import { IYandexUser } from 'src/types/types'

import { ControlStatusContainer } from '../ControlStatus/ControlStatusContainer'

import styles from './OnlineUser.module.css'

interface OnlineUserProps {
  user: IYandexUser
}

export const OnlineUser: FC<OnlineUserProps> = ({ user }) => {
  return (
    <div className={styles.user}>
      <UserAvatar user={user} width={40} height={40} fontSize={16} />
      <ControlStatusContainer id={user.id} />
    </div>
  )
}
