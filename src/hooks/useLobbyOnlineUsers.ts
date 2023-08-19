import { useParams } from "react-router"
import { useOnlineUsers } from "@hooks/useOnlineUsers"
import { useEffect } from "react"
import { api } from "@api/index"

export const useLobbyOnlineUsers = () => {
  const { teamId } = useParams()

  const { users, setUsers } = useOnlineUsers()

  useEffect(() => {
    api.getLobbyOnlineUsers(teamId).then(setUsers).catch(console.log)
  }, [])

  return { users }
}
