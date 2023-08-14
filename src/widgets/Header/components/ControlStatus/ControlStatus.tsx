import React, { FC, useEffect, useState } from 'react'

import { socket } from '@sockets/socket'
import { ControlTakenHandler } from '@sockets/types'

import { useGetControlUserQuery } from '@store/api/api'

import { trainingSessionId } from '@constants/training-session-id'

import { KeyboardOff } from '@icons/KeyboardOff'
import { KeyboardOn } from '@icons/KeyboardOn'

interface ControlStatusProps {
  id: string
}

export const ControlStatus: FC<ControlStatusProps> = ({ id }) => {
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)
  const [isActive, setIsActive] = useState(controlUser.userId === id)

  const controlTakenEventHandler: ControlTakenHandler = ({ userId }) => {
    setIsActive(userId === id)
  }

  useEffect(() => {
    return socket.subscribeControlTaken(controlTakenEventHandler)
  }, [])

  return isActive ? (
    <KeyboardOn color="var(--color-black-typo-primary)" width={32} height={32} />
  ) : (
    <KeyboardOff color="var(--color-grey-secondary)" width={32} height={32} />
  )
}
