import React, { FC } from 'react'

import styles from './PointsCell.module.css'

interface PointsCellProps {
  verdict: string
}

export const PointsCell: FC<PointsCellProps> = ({ verdict }) => {
  return <span className={styles.points}>{verdict === 'OK' ? '1' : '0'}</span>
}
