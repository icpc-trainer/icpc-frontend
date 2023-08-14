import React, { FC } from 'react'

import styles from './ProblemSpaceListInfo.module.css'

export const ProblemSpaceListInfo: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.place}>{'Место: 4'}</div>
      <div className={styles.doneCount}>{'Решено: 1'}</div>
      <div className={styles.fine}>{'Штраф: 234'}</div>
    </div>
  )
}
