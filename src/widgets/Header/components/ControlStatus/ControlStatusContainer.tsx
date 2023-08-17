import React, { FC, useEffect, useState } from 'react'

import { ControlTakenHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { useGetControlUserQuery } from '@store/api/api'

import { trainingSessionId } from '@constants/training-session-id'

import { ControlStatus } from '@widgets/Header/components/ControlStatus/ControlStatus'

interface ControlStatusProps {
  id: string
}

export const ControlStatusContainer: FC<ControlStatusProps> = ({ id }) => {
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)
  const [isActive, setIsActive] = useState(controlUser.userId === id)

  const controlTakenEventHandler: ControlTakenHandler = ({ userId }) => {
    setIsActive(userId === id)
  }

  useEffect(() => {
    return workSpaceSocket.subscribeControlTaken(controlTakenEventHandler)
  }, [])

  return <ControlStatus isActive={isActive} />
}
