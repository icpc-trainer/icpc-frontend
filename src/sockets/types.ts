import { IComment, ISubmission, IYandexUser } from 'src/types/types'

export enum Types {
  ProblemCommentReceived = 'PROBLEM_COMMENT_RECEIVED',
  ProblemCommentDeleted = 'PROBLEM_COMMENT_DELETED',
  CodeEditorUpdate = 'CODE_EDITOR_UPDATE',
  User = 'USER',
  ControlTaken = 'CONTROL_TAKEN',
  SubmissionRetrieved = 'SUBMISSION_VERDICT_RETRIEVED',
  UserLeave = 'USER_LEAVE',
  ProblemStatusUpdated = 'PROBLEM_STATUS_UPDATED',
  ProblemAssigned = 'PROBLEM_ASSIGNED',
  TrainingStarted = 'TRAINING_STARTED',
  ContestSelected = 'CONTEST_SELECTED',
  CompilerSelected = 'COMPILER_SELECTED',
  TrainingFinished = 'TRAINING_FINISHED',
}

export type Type = `${Types}`

export interface Payload {
  problemAlias?: string
}

export type ProblemCommentReceivedPayload = IComment

export interface CodePayload extends Payload {
  code: string
  userId: string
}

export interface ControlTakenPayload extends Payload {
  userId: string
}

export type SubmissionRetrievedPayload = ISubmission

export interface UserPayload extends Payload {
  user: IYandexUser
}

export interface UserLeavePayload extends Payload {
  userId: string
}

export interface ProblemStatusUpdatedPayload extends Payload {
  status: string
}

export interface ProblemAssignedPayload extends Payload {
  user: IYandexUser
}

export interface TrainingStartedPayload extends Payload {
  dtCreated: string
  id: string
  status: string
}

export interface ContestSelectedPayload extends Payload {
  contestId: string
}

export interface CompilerSelectedPayload extends Payload {
  compiler: string
}

export interface TrainingFinishedPayload extends Payload {}

export interface ProblemCommentDeletedPayload extends Payload {
  commentId: string
}

export interface Data {
  type: Type
  payload?: Payload
}

export type Handler = (payload: any) => void

export type ProblemCommentReceivedHandler = (payload: ProblemCommentReceivedPayload) => void
export type CodeHandler = (payload: CodePayload) => void
export type ControlTakenHandler = (payload: ControlTakenPayload) => void
export type SubmissionRetrievedHandler = (payload: SubmissionRetrievedPayload) => void
export type UserHandler = (payload: UserPayload) => void
export type UserLeaveHandler = (payload: UserLeavePayload) => void
export type ProblemStatusUpdatedHandler = (payload: ProblemStatusUpdatedPayload) => void
export type ProblemAssignedHandler = (payload: ProblemAssignedPayload) => void
export type TrainingStartedHandler = (payload: TrainingStartedPayload) => void
export type ContestSelectedHandler = (payload: ContestSelectedPayload) => void
export type CompilerSelectedHandler = (payload: CompilerSelectedPayload) => void
export type TrainingFinishedHandler = (payload: TrainingFinishedPayload) => void
export type ProblemCommentDeletedHandler = (payload: ProblemCommentDeletedPayload) => void

export type Handlers = {
  [key in Type]?: Set<Handler>
}

export const initialHandlers = {}
