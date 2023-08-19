import { useParams } from "react-router"
import { useOnlineUsers } from "@hooks/useOnlineUsers"
import { useEffect } from "react"
import { api } from "@api/index"

export const useWorkSpaceOnlineUsers = () => {
  const { trainingSessionId } = useParams()

  const { users, setUsers } = useOnlineUsers()

  useEffect(() => {
    api.getWorkSpaceOnlineUsers(trainingSessionId).then(setUsers).catch(console.log)
  }, [])

  return { users }
}
