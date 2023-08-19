import React, { FC } from 'react'

import { User } from '@icons/User'

import styles from './DefaultUserDropdown.module.css'

interface DefaultUserDropdownProps {
  onSendProblemAssigned: () => void
}

export const DefaultUserDropdown: FC<DefaultUserDropdownProps> = ({ onSendProblemAssigned }) => {
  return (
    <button className={styles.defaultUserDropdown} onClick={onSendProblemAssigned}>
      <User width={29} height={29} color={'var(--color-black-typo-primary)'} />
    </button>
  )
}
