import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { ControlTakenHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { useGetControlUserQuery } from '@store/api/api'

import { ControlStatus } from '@widgets/Header/components/ControlStatus/ControlStatus'

interface ControlStatusProps {
  id: string
}

export const ControlStatusContainer: FC<ControlStatusProps> = ({ id }) => {
  const { trainingSessionId } = useParams()

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
