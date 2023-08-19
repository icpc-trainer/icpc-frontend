import classNames from 'classnames'

import React, { FC, useState } from 'react'
import { useParams } from 'react-router'

import { ProblemItemContext } from '@contexts/problemItemContext'

import { Arrow } from '@icons/Arrow'
import { UserAvatar } from '@widgets/UserAvatar/UserAvatar'

import { IProblem } from 'src/types/types'

import { Dropdown } from '../Dropdown/Dropdown'

import styles from './ProblemSpaceListItem.module.css'

interface ProblemSpaceListProps {
  className?: string
  problem: IProblem
  handleProblemSpaceClick: (problem: IProblem) => void
}
export const ProblemSpaceListItem: FC<ProblemSpaceListProps> = ({ className, problem, handleProblemSpaceClick }) => {
  const { alias } = useParams()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const isSelected = alias === problem.alias

  const title = `${problem.alias}. ${problem.name}`
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const onCloseDropdown = () => setIsDropdownOpen(false)

  return (
    <ProblemItemContext.Provider value={{ problem, onCloseDropdown }}>
      <div className={classNames(className, { [styles.open]: isDropdownOpen })}>
        <div className={styles.infoContainer}>
          <div className={styles.lineTitleBlock}>
            <div
              className={classNames({
                [styles.lineDone]: problem.status === 'PASSED',
                [styles.lineWrong]: problem.status === 'FAILED',
                [styles.lineDefault]: problem.status === 'NOT_SUBMITTED',
              })}
            />
            <div
              onClick={() => handleProblemSpaceClick(problem)}
              className={classNames({
                [styles.title]: true,
              [styles.titlePrimary]: isSelected,
                [styles.titleSecondary]: !isSelected,
              })}
            >
              {title}
            </div>
          </div>
          <div className={styles.statusUserBlock}>
            <div className={styles.dropdown}>
              <div className={styles.user}>
                {problem.assignedUser ? (
                  <UserAvatar user={problem.assignedUser} width={24} height={24} fontSize={11} />
                ) : (
                  <span className={styles.defaultUserAvatar} />
                )}
              </div>
              <div className={classNames(styles.arrow, { [styles.rotated]: isDropdownOpen })} onClick={toggleDropdown}>
                <Arrow width={18} height={18} color={'var(--color-black-typo-primary)'} />
              </div>
            </div>
          </div>
        </div>
        {isDropdownOpen && <Dropdown />}
      </div>
    </ProblemItemContext.Provider>
  )
}
