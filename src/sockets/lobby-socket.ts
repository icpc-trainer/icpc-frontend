import { Socket } from '@sockets/socket'
import { TrainingStartedHandler, Types } from '@sockets/types'

class LobbySocket extends Socket {
  public subscribeTrainingStarted(handler: TrainingStartedHandler) {
    return this.subscribe(Types.TrainingStarted, handler)
  }
}

export const lobbySocket = new LobbySocket()
