import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { ILeaderBoard } from 'src/types/types'

import { LeaderBoardTable } from './components/LeaderBoardTable/LeaderBoardTable'

import styles from './LeaderBoard.module.css'

export const LeaderBoardContainer = ({
  style,
}: {
  style: {
    display: string
  }
}) => {
  const { trainingSessionId } = useParams<{ trainingSessionId: string }>()
  const [leaderBoard, setLeaderBoard] = useState<ILeaderBoard>(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      api
        .getStandings(trainingSessionId)
        .then(res => {
          setLeaderBoard(res)
        })
        .catch(console.log)
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [leaderBoard])

  if (!leaderBoard) return null

  return (
    <div style={style} className={styles.LeaderBoardContainer}>
      {/* <div className={styles.lastEventsWrapper}>
        <div className={styles.lastEventWrapper}>
          <span className={styles.lastEventTitle}>Последнее отправленное решение</span>
          <div className={styles.lastEventContent}>
            <span className={styles.lastEventTime}>04:59</span>
            <span className={classNames(styles.lastEventInfo, 'short')}>B, TeamSpirit</span>
          </div>
        </div>
        <div className={styles.lastEventWrapper}>
          <span className={styles.lastEventTitle}>Последний правильный ответ</span>
          <div className={styles.lastEventContent}>
            <span className={styles.lastEventTime}>04:59</span>
            <span className={classNames(styles.lastEventInfo, 'short')}>B, TeamSpirit</span>
          </div>
        </div>
      </div> */}
      <div className={styles.LeaderBoardTable}>
        <LeaderBoardTable leaderBoard={leaderBoard} />
      </div>
    </div>
  )
}
