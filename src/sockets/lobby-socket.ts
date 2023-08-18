import { Socket } from '@sockets/socket'
import { TrainingStartedHandler, Types, UserHandler, UserLeaveHandler } from '@sockets/types'

class LobbySocket extends Socket {
  public sendContestSelected(payload: ContestSelectedPayload) {
    return this.send({ type: Types.ContestSelected, payload })
  }

  public subscribeTrainingStarted(handler: TrainingStartedHandler) {
    return this.subscribe(Types.TrainingStarted, handler)
  }

  public subscribeUser(handler: UserHandler) {
    return this.subscribe(Types.User, handler)
  }

  public subscribeUserLeave(handler: UserLeaveHandler) {
    return this.subscribe(Types.UserLeave, handler)
  }
}

export const lobbySocket = new LobbySocket()
