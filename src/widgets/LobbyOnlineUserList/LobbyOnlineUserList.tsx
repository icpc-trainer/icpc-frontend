import React, { FC } from "react"
import { IYandexUser } from "../../types/types"
import { GetItemKeyFunction, List, RenderItemFunction } from "@ui/List/List"
import { LobbyOnlineUser } from "@widgets/LobbyOnlineUser/LobbyOnlineUser"

interface LobbyOnlineUserListProps {
  users: IYandexUser[]
}

export const LobbyOnlineUserList: FC<LobbyOnlineUserListProps> = ({ users }) => {
  const getUserKey: GetItemKeyFunction<IYandexUser> = user => user.id
  const renderUser: RenderItemFunction<IYandexUser> = user => <LobbyOnlineUser user={user} />

  return (
    <List
      data={users}
      getItemKey={getUserKey}
      renderItem={renderUser}
    />
  )
}
