import React, { FC } from 'react'

import styles from './DefaultUserDropdown.module.css'

interface DefaultUserDropdownProps {
  onSendProblemAssigned: () => void
}

export const DefaultUserDropdown: FC<DefaultUserDropdownProps> = ({ onSendProblemAssigned }) => {
  return (
    <button className={styles.defaultUserDropdownButton} onClick={onSendProblemAssigned}>
      <span className={styles.defaultUserDropdownButtonIcon} />
    </button>
  )
}
