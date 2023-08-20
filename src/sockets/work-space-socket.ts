import { Socket } from './socket'
import {
  CodeHandler,
  CodePayload,
  CompilerSelectedHandler,
  CompilerSelectedPayload,
  ControlTakenHandler,
  ControlTakenPayload,
  ProblemCommentReceivedHandler,
  ProblemAssignedHandler,
  ProblemAssignedPayload,
  ProblemCommentDeletedHandler,
  ProblemStatusUpdatedHandler,
  SubmissionRetrievedHandler,
  TrainingFinishedHandler,
  Types,
  UserHandler,
  UserLeaveHandler,
} from './types'

class WorkSpaceSocket extends Socket {
  public sendCode(payload: CodePayload) {
    this.send({ type: Types.CodeEditorUpdate, payload })
  }

  public sendControlTaken(payload: ControlTakenPayload) {
    this.send({ type: Types.ControlTaken, payload })
  }

  public sendProblemAssigned(payload: ProblemAssignedPayload) {
    this.send({ type: Types.ProblemAssigned, payload })
  }

  public sendCompilerSelected(payload: CompilerSelectedPayload) {
    this.send({ type: Types.CompilerSelected, payload })
  }

  public subscribeProblemCommentReceived(handler: ProblemCommentReceivedHandler) {
    return this.subscribe(Types.ProblemCommentReceived, handler)
  }

  public subscribeEditor(handler: CodeHandler) {
    return this.subscribe(Types.CodeEditorUpdate, handler)
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

  public subscribeCompilerSelected(handler: CompilerSelectedHandler) {
    return this.subscribe(Types.CompilerSelected, handler)
  }

  public subscribeTrainingFinished(handler: TrainingFinishedHandler) {
    return this.subscribe(Types.TrainingFinished, handler)
  }

  public subscribeProblemCommentDeleted(handler: ProblemCommentDeletedHandler) {
    return this.subscribe(Types.ProblemCommentDeleted, handler)
  }
}

export const workSpaceSocket = new WorkSpaceSocket()
