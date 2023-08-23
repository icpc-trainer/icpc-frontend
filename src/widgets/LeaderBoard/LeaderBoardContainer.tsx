import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { Loading } from '@ui/Loading/Loading'

import { ILeaderBoard } from 'src/types/types'

import { LeaderBoardTable } from './components/LeaderBoardTable/LeaderBoardTable'

import styles from './LeaderBoard.module.css'

export const LeaderBoardContainer = () => {
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

  if (!leaderBoard)
    return (
      <div className={styles.LeaderBoardContainer}>
        <Loading />
      </div>
    )

  return (
    <div className={styles.LeaderBoardContainer}>
      <div className={styles.LeaderBoardTable}>
        <LeaderBoardTable leaderBoard={leaderBoard} />
      </div>
    </div>
  )
}
