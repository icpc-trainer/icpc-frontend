import React, { FC } from "react"
import styles from "./RunningTimeCell.module.css"

interface RunningTimeCellProps {
  runningTime: number
}

export const RunningTimeCell: FC<RunningTimeCellProps> = ({ runningTime }) => {
  return <span className={styles.runningTime}>{runningTime + 'ms'}</span>
}
