import { Socket } from '@sockets/socket'

import { urls } from '@constants/urls'

class LobbySocket extends Socket {}

const getUrl = (userId: string) => `${urls.websocketLobby}?team_id=228&user_id=${userId}`

export const lobbySocket = new LobbySocket(getUrl)
