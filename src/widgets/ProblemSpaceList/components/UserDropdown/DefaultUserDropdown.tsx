import React, { FC, useContext } from 'react'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { ProblemItemContext } from '@contexts/problemItemContext'

import { User } from '@icons/User'

import styles from './DefaultUserDropdown.module.css'

export const DefaultUserDropdown: FC = () => {
  const { problem } = useContext(ProblemItemContext)

  const onSendProblemAssigned = () => {
    workSpaceSocket.sendProblemAssigned({ user: null, problemAlias: problem.alias })
  }

  return (
    <button className={styles.defaultUserDropdown} onClick={onSendProblemAssigned}>
      <User width={29} height={29} color={'var(--color-black-typo-primary)'} />
    </button>
  )
}
