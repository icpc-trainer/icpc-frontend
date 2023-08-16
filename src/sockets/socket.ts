import { trainingSessionId } from '@constants/training-session-id'
import { urls } from '@constants/urls'

import { IYandexUser } from 'src/types/types'

import {
  CodeHandler,
  CodePayload,
  ControlTakenHandler,
  ControlTakenPayload,
  ProblemAssignedPayload,
  Data,
  Handler,
  Handlers,
  MessageHandler,
  ProblemAssignedHandler,
  ProblemStatusUpdatedHandler,
  Type,
  Types,
  UserHandler,
  UserLeaveHandler,
  SubmissionRetrievedHandler,
  initialHandlers,
} from './types'

class Socket {
  private client: WebSocket
  private initialized: boolean = false

  private readonly handlers: Handlers = initialHandlers

  constructor() {}

  public init(user: IYandexUser) {
    if (!this.initialized) {
      this.client = new WebSocket(`${urls.websocket}?training_session_id=${trainingSessionId}&user_id=${user.id}`)

      this.client.onopen = function () {
        this.send(JSON.stringify({ type: Types.User, payload: { user } }))
      }

      this.client.onmessage = (evt: MessageEvent<string>) => {
        const { type, payload }: Data = JSON.parse(evt.data)
        console.log(JSON.parse(evt.data))

        if (this.handlers[type]) {
          this.handlers[type].forEach(handler => handler(payload))
        }
      }

      this.initialized = true
    }
  }

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
    // @ts-ignore
    return this.subscribe(Types.Message, handler)
  }

  public subscribeEditor(handler: CodeHandler) {
    // @ts-ignore
    return this.subscribe(Types.Code, handler)
  }

  public subscribeControlTaken(handler: ControlTakenHandler) {
    // @ts-ignore
    return this.subscribe(Types.ControlTaken, handler)
  }

  public subscribeSubmissionRetrieved(handler: SubmissionRetrievedHandler) {
    // @ts-ignore
    return this.subscribe(Types.SubmissionRetrieved, handler)
  }

  public subscribeUser(handler: UserHandler) {
    // @ts-ignore
    return this.subscribe(Types.User, handler)
  }

  public subscribeUserLeave(handler: UserLeaveHandler) {
    // @ts-ignore
    return this.subscribe(Types.UserLeave, handler)
  }

  public subscribeProblemStatusUpdated(handler: ProblemStatusUpdatedHandler) {
    // @ts-ignore
    return this.subscribe(Types.ProblemStatusUpdated, handler)
  }
  public subscribeProblemAssigned(handler: ProblemAssignedHandler) {
    // @ts-ignore
    return this.subscribe(Types.ProblemAssigned, handler)
  }

  private send(data: Data) {
    this.client.send(JSON.stringify(data))
  }

  private subscribe(eventName: Type, handler: Handler) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = new Set([handler])
    } else {
      this.handlers[eventName].add(handler)
    }

    return () => {
      this.handlers[eventName].delete(handler)
    }
  }
}

export const socket = new Socket()
