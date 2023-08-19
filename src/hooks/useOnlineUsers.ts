import { useEffect, useState } from "react"
import { IYandexUser } from "../types/types"
import { UserHandler, UserLeaveHandler } from "@sockets/types"
import { lobbySocket } from "@sockets/lobby-socket"

export const useOnlineUsers = () => {
  const [users, setUsers] = useState<IYandexUser[]>([])

  const userEventHandler: UserHandler = ({ user }) => {
    setUsers(prev => {
      const isDisplayed = !!prev.find(({ id }) => user.id === id)

      if (!isDisplayed) {
        return [...prev, user]
      }

      return prev
    })
  }

  const userLeaveEventHandler: UserLeaveHandler = ({ userId }) => {
    setUsers(prev => prev.filter(({ id }) => id !== userId))
  }

  useEffect(() => {
    const userUnsubscribe = lobbySocket.subscribeUser(userEventHandler)
    const userLeaveUnsubscribe = lobbySocket.subscribeUserLeave(userLeaveEventHandler)

    return () => {
      userUnsubscribe()
      userLeaveUnsubscribe()
    }
  }, [])

  return { users, setUsers }
}
