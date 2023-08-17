import React from 'react'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { useUserControl } from '@hooks/useUserControl'

import { ControlButton } from './ControlButton'

export const ControlButtonContainer = () => {
  const { hasCurrentUserControl, currentUser } = useUserControl()

  const isDisabled = hasCurrentUserControl

  const onTakeControl = () => {
    workSpaceSocket.sendControlTaken({ userId: currentUser.id })
  }

  return <ControlButton isDisabled={isDisabled} onTakeControl={onTakeControl} />
}
