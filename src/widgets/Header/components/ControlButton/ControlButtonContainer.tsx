import React, { useEffect, useState } from 'react'

import { trainingSessionId } from '../../../../constants/training-session-id'
import { ControlTakenHandler, socket } from '../../../../sockets'
import { useGetControlUserQuery, useGetYandexUserQuery } from '../../../../store/api/api'
import { Button } from '../../../../ui/Button/Button'
import { ControlButton } from './ControlButton'

import styles from './ControlButtonContainer.module.css'

export const ControlButtonContainer = () => {
  const { data: currentUser } = useGetYandexUserQuery()
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)

  const [isActive, setIsActive] = useState(controlUser.userId === currentUser.id)

  const controlTakenEventHandler: ControlTakenHandler = ({ userId }) => {
    setIsActive(userId === currentUser.id)
  }

  const onTakeControl = () => {
    console.log(currentUser.id)
    socket.sendControlTaken({ userId: currentUser.id })
  }

  useEffect(() => {
    return socket.subscribeControlTaken(controlTakenEventHandler)
  }, [])

  return <ControlButton isActive={isActive} onTakeControl={onTakeControl} />
}
