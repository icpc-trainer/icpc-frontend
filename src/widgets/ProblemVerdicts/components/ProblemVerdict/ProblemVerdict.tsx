import React from 'react'

import { Arrow } from '../../../../ui/icons/Arrow'

import styles from './ProblemSolutionVerdict.module.css'

export const ProblemVerdict = () => {
  return (
    <div className={styles.problemSolutionDetails}>
      <h3 className={styles.detailsHeader}>
        <Arrow className={styles.arrowBack} width={24} height={24} color={'var(--color-black-typo-primary)'} />
        Детализация
      </h3>
    </div>
  )
}
