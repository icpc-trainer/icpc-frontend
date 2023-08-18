import React from 'react'
import { useParams } from 'react-router'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { useGetControlUserQuery, useGetCurrentUserQuery } from '@store/api/api'

import { urls } from '@constants/urls'

import { Header } from '@widgets/Header/Header'
import { ProblemSpace } from '@widgets/ProblemSpace/ProblemSpace'

import styles from './WorkSpace.module.css'

export const WorkSpace = () => {
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
    <main className={styles.workspace}>
      <Header />

      <ProblemSpace />
    </main>
  )
}
