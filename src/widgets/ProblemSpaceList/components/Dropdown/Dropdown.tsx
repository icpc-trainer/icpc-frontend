import classNames from 'classnames'

import React, { FC, useState } from 'react'
import { useParams } from 'react-router'

import { Arrow } from '@icons/Arrow'
import { User } from '@icons/User'

import { IProblem } from 'src/types/types'

import { DropdownUserListContainer } from './DropdownUserListContainer'

import styles from './Dropdown.module.css'

export const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <DropdownUserListContainer />
    </div>
  )
}
