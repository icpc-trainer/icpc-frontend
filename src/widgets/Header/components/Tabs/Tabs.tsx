import classnames from 'classnames'

import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

import styles from './Tabs.module.css'

export const Tabs = () => {
  const { trainingSessionId, alias } = useParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const onNavigateWorkSpace = () => navigate(`/workspace/${trainingSessionId}/${alias}`)
  const onNavigateLeaderBoard = () => navigate(`/workspace/${trainingSessionId}/${alias}/leaderboard`)

  const isLeaderboard = /^\/workspace\/.*\/.*\/leaderboard$/.test(pathname)

  const wordSpaceClassName = classnames({
    [styles.tab]: true,
    [styles.tabSelected]: !isLeaderboard,
  })

  const leaderboardClassName = classnames({
    [styles.tab]: true,
    [styles.tabSelected]: isLeaderboard,
  })

  return (
    <div className={styles.tabs}>
      <span className={wordSpaceClassName} onClick={onNavigateWorkSpace}>
        Решение
      </span>
      <span className={leaderboardClassName} onClick={onNavigateLeaderBoard}>
        Положение участников
      </span>
    </div>
  )
}
