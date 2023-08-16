import React, { FC, useContext } from 'react'

import { User } from '@icons/User'

import { IYandexUser } from 'src/types/types'

import styles from './DefaultUserDropdown.module.css'
import { socket } from '@sockets/socket'
import { ProblemItemContext } from '@contexts/problemItemContext'

export const DefaultUserDropdown = () => {
  const { problem } = useContext(ProblemItemContext)

  const onSendProblemAssign = (user: IYandexUser | null) => {
    socket.sendProblemAssigned({ user: null, problemAlias: problem.alias })
  }

  return (
    <button className={styles.defaultUserDropdown} onClick={() => onSendProblemAssign(null)}>
      <User width={26} height={26} color={'var(--color-black-typo-primary)'} />
    </button>
  )
}
