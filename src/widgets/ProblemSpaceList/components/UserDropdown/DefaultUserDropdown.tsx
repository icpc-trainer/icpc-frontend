import React, { FC, useContext } from 'react'

import { User } from '@icons/User'

import styles from './DefaultUserDropdown.module.css'
import { socket } from '@sockets/socket'
import { ProblemItemContext } from '@contexts/problemItemContext'

export const DefaultUserDropdown: FC = () => {
  const { problem } = useContext(ProblemItemContext)

  const onSendProblemAssigned = () => {
    socket.sendProblemAssigned({ user: null, problemAlias: problem.alias })
  }

  return (
    <button className={styles.defaultUserDropdown} onClick={onSendProblemAssigned}>
      <User width={26} height={26} color={'var(--color-black-typo-primary)'} />
    </button>
  )
}
