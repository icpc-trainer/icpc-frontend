import React from 'react'

import { DropdownUserListContainer } from './DropdownUserListContainer'

import styles from './Dropdown.module.css'

export const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <DropdownUserListContainer />
    </div>
  )
}
