import * as React from 'react'
import { FC } from 'react'

import { Problems, Problem } from '../../types/types'
import { BlockWrapper } from '../../ui/BlockWrapper/BlockWrapper'
import { Loading } from '../../ui/Loading/Loading'
import { ProblemSpaceListInfo } from './components/ProblemSpaceListInfo/ProblemSpaceListInfo'
import { ProblemSpaceListItem } from './components/ProblemSpaceListItem/ProblemSpaceListItem'

import styles from './ProblemSpaceList.module.css'

interface Props {
  problems: Problems
  handleProblemSpaceClick: (problem: Problem) => void
  contestId: string
  currentAlias: string
}

export const ProblemSpaceList: FC<Props> = ({ problems, handleProblemSpaceClick, contestId, currentAlias }) => {
  return (
    <BlockWrapper className={styles.container}>
      <h3 className={styles.title}>{'Задачи'}</h3>
      <div className={styles.problems}>
        {problems.map((problem) => (
          <ProblemSpaceListItem key={problem.id} problem={problem} handleProblemSpaceClick={handleProblemSpaceClick} />
        ))}
      </div>

      {/*<ProblemSpaceListInfo />*/}
    </BlockWrapper>
  )
}
