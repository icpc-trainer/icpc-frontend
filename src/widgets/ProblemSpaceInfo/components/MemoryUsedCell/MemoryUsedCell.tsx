import React, { FC } from 'react'

import styles from './MemoryUsedCell.module.css'

interface MemoryUsedCell {
  memoryUsed: number
}

export const MemoryUsedCell: FC<MemoryUsedCell> = ({ memoryUsed }) => {
  const memoryInMB = (memoryUsed / 1024 / 1024).toFixed(2)

  return <span className={styles.memoryUsed}>{memoryInMB + ' MB'}</span>
}
