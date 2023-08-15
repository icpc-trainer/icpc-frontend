import classNames from 'classnames'

import React, { FC, useState } from 'react'
import { useParams } from 'react-router'

import { IProblem } from 'src/types/types'

import styles from './ProblemSpaceListItem.module.css'

interface ProblemSpaceListProps {
  className?: string
  problem: IProblem
  handleProblemSpaceClick: (problem: IProblem) => void
}
export const ProblemSpaceListItem: FC<ProblemSpaceListProps> = ({ className, problem, handleProblemSpaceClick }) => {
  const { alias } = useParams()

  const [isOpen, setIsOpen] = useState(false)

  const isSelected = alias === problem.alias

  const title = `${problem.alias}. ${problem.name}`

  // const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className={classNames(styles.container, className, { [styles.open]: isOpen })}>
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
            [styles.titlePrimary]: isSelected,
            [styles.titleSecondary]: !isSelected,
          })}
        >
          {title}
        </div>
      </div>
      <div className={styles.statusUserBlock}>
        {/*<div*/}
        {/*  className={classNames({*/}
        {/*    [styles.statusDone]: status === "done",*/}
        {/*    [styles.statusPending]: status === "pending",*/}
        {/*    [styles.statusWrong]: status === "wrong",*/}
        {/*    [styles.statusDefault]: status === "default",*/}
        {/*  })}*/}
        {/*>*/}
        {/*  {"1"}*/}
        {/*</div>*/}
        {/*<div className={styles.user}>*/}
        {/*  <User width={24} height={24} color={"var(--color-black-typo-primary)"} />*/}
        {/*</div>*/}
        {/*<div className={styles.dropdownContainer}>*/}
        {/*  <div className={classNames(styles.arrow, { [styles.rotated]: isOpen })} onClick={toggleDropdown}>*/}
        {/*    <Arrow width={18} height={18} color={"var(--color-black-typo-primary)"} />*/}
        {/*  </div>*/}
        {/*  {isOpen && (*/}
        {/*    <div className={styles.dropdown}>*/}
        {/*      <div className={styles.user}>*/}
        {/*        <User width={24} height={24} color={"var(--color-black-typo-primary)"} />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*</div>*/}
      </div>
    </div>
  )
}
