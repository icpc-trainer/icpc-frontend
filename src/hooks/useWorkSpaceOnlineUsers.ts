import { useEffect } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { useOnlineUsers } from '@hooks/useOnlineUsers'

export const useWorkSpaceOnlineUsers = () => {
  const { trainingSessionId } = useParams()

  const { users, setUsers } = useOnlineUsers()

  useEffect(() => {
    api.getWorkSpaceOnlineUsers(trainingSessionId).then(setUsers).catch(console.log)
  }, [])

  return { users }
}
