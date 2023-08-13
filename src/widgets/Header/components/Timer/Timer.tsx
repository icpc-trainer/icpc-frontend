import React, { FC } from 'react'

import styles from './Timer.module.css'
import { convertMsToTime } from '../../../../utils/converMsToTime'

interface TimerProps {
    secondsLeftString:string
}

export const Timer:FC<TimerProps> = ({secondsLeftString}) => {

  return (
    <div className={styles.timer}>
        До завершения осталось: <span className={styles.time}>{secondsLeftString}</span>
    </div>
  )
}
