import classNames from 'classnames'

import React, { useContext } from 'react'
import { Route, Routes, useParams } from 'react-router'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { useGetControlUserQuery, useGetCurrentUserQuery } from '@store/api/api'

import { urls } from '@constants/urls'
import { OnlineUsersContext } from '@contexts/onlineUsersContext'
import { ThemeContext } from '@contexts/themeContext'
import { useWorkSpaceOnlineUsers } from '@hooks/useWorkSpaceOnlineUsers'

import { FinishPopup } from '@widgets/FinishPopup/FinishPopup'
import { Header } from '@widgets/Header/Header'
import { LeaderBoardContainer } from '@widgets/LeaderBoard/LeaderBoardContainer'
import { ProblemSpace } from '@widgets/ProblemSpace/ProblemSpace'

import styles from './WorkSpace.module.css'

export const WorkSpace = () => {
  const { theme } = useContext(ThemeContext)

  const { trainingSessionId } = useParams()

  const { data: currentUser } = useGetCurrentUserQuery()
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)
  const { users } = useWorkSpaceOnlineUsers()

  workSpaceSocket.init(
    `${urls.websocketWorkSpace}?training_session_id=${trainingSessionId}&user_id=${currentUser.id}`,
    currentUser,
  )

  if (!currentUser || !controlUser) {
    return null
  }

  return (
    <OnlineUsersContext.Provider value={{ users }}>
      <main className={classNames(styles.workspace, theme)}>
        <Header />

        <Routes>
          <Route path="/" element={<ProblemSpace />} />
          <Route path="leaderboard" element={<LeaderBoardContainer />} />
        </Routes>
      </main>
      <FinishPopup />
    </OnlineUsersContext.Provider>
  )
}
