import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { ControlTakenHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { useGetControlUserQuery, useGetCurrentUserQuery } from '@store/api/api'

export const useUserControl = () => {
  const { trainingSessionId } = useParams()

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
