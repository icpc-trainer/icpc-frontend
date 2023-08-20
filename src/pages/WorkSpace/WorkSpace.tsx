import classNames from 'classnames'

import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { useGetControlUserQuery, useGetCurrentUserQuery } from '@store/api/api'

import { urls } from '@constants/urls'
import { ThemeContext } from '@contexts/themeContext'

import { FinishPopup } from '@widgets/FinishPopup/FinishPopup'
import { Header } from '@widgets/Header/Header'
import { LeaderBoardContainer } from '@widgets/LeaderBoard/LeaderBoardContainer'
import { ProblemSpace } from '@widgets/ProblemSpace/ProblemSpace'

import styles from './WorkSpace.module.css'

export const WorkSpace = () => {
  const { theme } = useContext(ThemeContext)
  let [activeTab, setActiveTab] = useState('solution')

  const { trainingSessionId } = useParams()

  const { data: currentUser } = useGetCurrentUserQuery()
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)

  workSpaceSocket.init(
    `${urls.websocketWorkSpace}?training_session_id=${trainingSessionId}&user_id=${currentUser.id}`,
    currentUser,
  )

  if (!currentUser || !controlUser) {
    return null
  }

  return (
    <>
      <main className={classNames(styles.workspace, theme)}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <ProblemSpace style={{ display: activeTab === 'solution' ? 'grid' : 'none' }} />
        <LeaderBoardContainer style={{ display: activeTab === 'leaderBoard' ? 'flex' : 'none' }} />
      </main>
      <FinishPopup />
    </>
  )
}
