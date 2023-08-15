import classNames from 'classnames'

import React, { FC, useState } from 'react'
import { useParams } from 'react-router'

import { IProblem } from 'src/types/types'

import styles from './Dropdown.module.css'
import { Arrow } from '@icons/Arrow'
import { User } from '@icons/User'
import { DropdownUserListContainer } from './DropdownUserListContainer'

interface ProblemSpaceListProps {
    isOpen: boolean
    toggleDropdown: () => void
    // className?: string
    // problem: IProblem
    // handleProblemSpaceClick: (problem: IProblem) => void
}

export const Dropdown: FC<ProblemSpaceListProps> = ({ isOpen, toggleDropdown }) => {
    return (
        <div className={styles.dropdownContainer}>
            
            <div className={classNames(styles.arrow, { [styles.rotated]: isOpen })} onClick={toggleDropdown}>
                <Arrow width={18} height={18} color={"var(--color-black-typo-primary)"} />
            </div>
            
            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.user}>
                        <User width={24} height={24} color={"var(--color-black-typo-primary)"} />
                    </div>
                    <DropdownUserListContainer />
                </div>
            )}
        </div>
    )
}
