import React, { FC } from 'react'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'

import { IProblem } from 'src/types/types'

import { ProblemSpaceListItem } from './components/ProblemSpaceListItem/ProblemSpaceListItem'

import styles from './ProblemSpaceList.module.css'

interface Props {
  problems: IProblem[]
  handleProblemSpaceClick: (problem: IProblem) => void
}

export const ProblemSpaceList: FC<Props> = ({ problems, handleProblemSpaceClick }) => {
  return (
    <BlockWrapper className={styles.container}>
      <h3 className={styles.title}>{'Задачи'}</h3>
      <div className={styles.problems}>
        {problems.map(problem => (
          <ProblemSpaceListItem key={problem.id} problem={problem} handleProblemSpaceClick={handleProblemSpaceClick} />
        ))}
      </div>
    </BlockWrapper>
  )
}
