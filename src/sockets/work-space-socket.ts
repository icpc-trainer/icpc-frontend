import { Socket } from './socket'
import {
  CodeHandler,
  CodePayload,
  ControlTakenHandler,
  ControlTakenPayload,
  MessageHandler,
  ProblemAssignedHandler,
  ProblemAssignedPayload,
  ProblemStatusUpdatedHandler,
  SubmissionRetrievedHandler,
  Types,
  UserHandler,
  UserLeaveHandler,
} from './types'

class WorkSpaceSocket extends Socket {
  public sendCode(payload: CodePayload) {
    this.send({ type: Types.Code, payload })
  }

  public sendControlTaken(payload: ControlTakenPayload) {
    this.send({ type: Types.ControlTaken, payload })
  }

  public sendProblemAssigned(payload: ProblemAssignedPayload) {
    this.send({ type: Types.ProblemAssigned, payload })
  }

  public subscribeMessage(handler: MessageHandler) {
    return this.subscribe(Types.Message, handler)
  }

  public subscribeEditor(handler: CodeHandler) {
    return this.subscribe(Types.Code, handler)
  }

  public subscribeControlTaken(handler: ControlTakenHandler) {
    return this.subscribe(Types.ControlTaken, handler)
  }

  public subscribeSubmissionRetrieved(handler: SubmissionRetrievedHandler) {
    return this.subscribe(Types.SubmissionRetrieved, handler)
  }

  public subscribeUser(handler: UserHandler) {
    return this.subscribe(Types.User, handler)
  }

  public subscribeUserLeave(handler: UserLeaveHandler) {
    return this.subscribe(Types.UserLeave, handler)
  }

  public subscribeProblemStatusUpdated(handler: ProblemStatusUpdatedHandler) {
    return this.subscribe(Types.ProblemStatusUpdated, handler)
  }

  public subscribeProblemAssigned(handler: ProblemAssignedHandler) {
    return this.subscribe(Types.ProblemAssigned, handler)
  }
}

export const workSpaceSocket = new WorkSpaceSocket()
