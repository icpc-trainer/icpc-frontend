import classNames from 'classnames'
import React, { useState } from 'react'
import { FC } from 'react'
import { useParams } from 'react-router'

import { Problem } from '../../../../types/types'
import { Arrow } from '../../../../ui/icons/Arrow'
import { User } from '../../../../ui/icons/User'

import styles from './ProblemSpaceListItem.module.css'

interface ProblemSpaceListProps {
  className?: string
  problem: Problem
  handleProblemSpaceClick: (problem: Problem) => void
  // name: string
  // alias: string
  // id: string
  status: string
  // onSelect: (id: string, alias: string) => void
  // currentProblemId: string
}
export const ProblemSpaceListItem: FC<ProblemSpaceListProps> = ({
  className,
  problem,
  handleProblemSpaceClick,
  status,
}) => {
  const title = `${problem.alias}. ${problem.name}`
  const { alias } = useParams()

  const isSelected = alias === problem.alias

  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  // const handleSelect = () => onSelect(id, alias)

  return (
    <div className={classNames(styles.container, className, { [styles.open]: isOpen })}>
      <div className={styles.lineTitleBlock}>
        <div
          className={classNames({
            [styles.lineDone]: status === 'done',
            [styles.linePending]: status === 'pending',
            [styles.lineWrong]: status === 'wrong',
            [styles.lineDefault]: status === 'default',
            // [styles.linePrimary]: isSelected && status === "default",
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
