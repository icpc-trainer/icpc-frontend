import * as React from 'react'
import { FC, useEffect, useState } from 'react'

import { api } from '../../api'
import { trainingSessionId } from '../../constants/training-session-id'
import { ControlTakenHandler, UserHandler, UserLeaveHandler, socket } from '../../sockets'
import { useGetYandexUserQuery } from '../../store/api/api'
import { YandexUser } from '../../types/types'
import { Header } from './Header'

export const HeaderContainer: FC = () => {
  const { data: user } = useGetYandexUserQuery()

  const [isControlTaken, setIsControlTaken] = useState<boolean>(false)
  const [yandexUsersOnline, setYandexUsersOnline] = useState<YandexUser[]>([])

  const controlTakenHandler: ControlTakenHandler = ({ userId }) => {
    setIsControlTaken(userId === user.id)
  }

  const onTakeControl = () => {
    socket.sendControlTaken({ userId: user.id })
  }

  const userEventHandler: UserHandler = ({ user }) => {
    setYandexUsersOnline((prev) => [...prev, user])
  }

  const userLeaveEventHandler: UserLeaveHandler = ({ userId }) => {
    setYandexUsersOnline((prev) => prev.filter((user) => user.id !== userId))
  }

  useEffect(() => {
    api.getYandexUsersOnline(trainingSessionId).then(setYandexUsersOnline).catch(console.log)

    const controlTakenUnsubscribe = socket.subscribeControlTaken(controlTakenHandler)
    const userUnsubscribe = socket.subscribeUser(userEventHandler)
    const userLeaveUnsubscribe = socket.subscribeUserLeave(userLeaveEventHandler)

    return () => {
      controlTakenUnsubscribe()
      userUnsubscribe()
      userLeaveUnsubscribe()
    }
  }, [isControlTaken])

  return <Header yandexUsersOnline={yandexUsersOnline} onTakeControl={onTakeControl} />
}
