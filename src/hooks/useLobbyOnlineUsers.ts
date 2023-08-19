import { useEffect } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { useOnlineUsers } from '@hooks/useOnlineUsers'

export const useLobbyOnlineUsers = () => {
  const { teamId } = useParams()

  const { users, setUsers } = useOnlineUsers()

  useEffect(() => {
    api.getLobbyOnlineUsers(teamId).then(setUsers).catch(console.log)
  }, [])

  return { users }
}
