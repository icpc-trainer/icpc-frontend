import { useEffect, useState } from 'react'

import { workSpaceSocket } from '@sockets/work-space-socket'
import { ControlTakenHandler } from '@sockets/types'

import { useGetControlUserQuery, useGetCurrentUserQuery } from '@store/api/api'

import { trainingSessionId } from '@constants/training-session-id'

export const useUserControl = () => {
  const { data: currentUser } = useGetCurrentUserQuery()
  const { data: controlUser } = useGetControlUserQuery(trainingSessionId)

  const [hasCurrentUserControl, setHasCurrentUserControl] = useState<boolean>(controlUser.userId === currentUser.id)

  const controlTakenHandler: ControlTakenHandler = ({ userId }) => {
    setHasCurrentUserControl(userId === currentUser.id)
  }

  useEffect(() => {
    return workSpaceSocket.subscribeControlTaken(controlTakenHandler)
  }, [])

  return { hasCurrentUserControl, currentUser }
}
