import React, { useEffect, useState } from 'react'
import { FC } from 'react'

import { api } from '../../../../api'
import { trainingSessionId } from '../../../../constants/training-session-id'
import { getAvatarUrl } from '../../../../helpers/getAvatarUrl'
import { ControlTakenHandler, socket } from '../../../../sockets'
import { useGetControlUserQuery } from '../../../../store/api/api'
import { YandexUser } from '../../../../types/types'
import { KeyboardOff } from '../../../../ui/icons/KeyboardOff'
import { KeyboardOn } from '../../../../ui/icons/KeyboardOn'

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
