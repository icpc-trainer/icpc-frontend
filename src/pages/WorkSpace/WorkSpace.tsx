import React from 'react'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { useGetControlUserQuery, useGetCurrentUserQuery } from '@store/api/api'

import { trainingSessionId } from '@constants/training-session-id'

import { Header } from '@widgets/Header/Header'
import { ProblemSpace } from '@widgets/ProblemSpace/ProblemSpace'

import styles from './WorkSpace.module.css'

export const WorkSpace = () => {
  const { data: currentUser } = useGetCurrentUserQuery()
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)

  workSpaceSocket.init(currentUser)

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
