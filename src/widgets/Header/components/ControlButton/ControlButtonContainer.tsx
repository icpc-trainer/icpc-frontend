import React from 'react'

import { socket } from '@sockets/socket'

import { useUserControl } from '@hooks/useUserControl'

import { ControlButton } from './ControlButton'

export const ControlButtonContainer = () => {
  const { hasCurrentUserControl, currentUser } = useUserControl()

  const isDisabled = hasCurrentUserControl

  const onTakeControl = () => {
    socket.sendControlTaken({ userId: currentUser.id })
  }

  return <ControlButton isDisabled={isDisabled} onTakeControl={onTakeControl} />
}
