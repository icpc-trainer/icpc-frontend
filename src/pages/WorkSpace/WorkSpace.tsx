import React from 'react'

import { socket } from '@sockets/socket'

import { useGetControlUserQuery, useGetYandexUserQuery } from '@store/api/api'

import { trainingSessionId } from '@constants/training-session-id'

import { HeaderContainer } from '@widgets/Header/HeaderContainer'
import { ProblemSpace } from '@widgets/ProblemSpace/ProblemSpace'

import styles from './WorkSpace.module.css'

export const WorkSpace = () => {
  const { data: user } = useGetYandexUserQuery()
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)

  socket.init(user)

  if (!controlUser) {
    return null
  }

  return (
    <main className={styles.workspace}>
      <HeaderContainer />

      <ProblemSpace />
    </main>
  )
}
