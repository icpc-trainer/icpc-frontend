import React, { FC } from 'react'

import styles from './TimeCell.module.css'

interface TimeCellProps {
  timeFromStart: number
}

export const TimeCell: FC<TimeCellProps> = ({ timeFromStart }) => {
  return <span className={styles.time}>{new Date(timeFromStart).toISOString().slice(11, 19)}</span>
}
