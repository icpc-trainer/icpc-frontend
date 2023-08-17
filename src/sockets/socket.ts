import { Data, Handler, Handlers, Type, Types } from '@sockets/types'

import { IYandexUser } from '../types/types'

abstract class Socket {
  private readonly getUrl: (userId: string) => string
  private client: WebSocket

  private readonly handlers: Handlers = {}
  private initialized: boolean = false

  constructor(getUrl: (userId: string) => string) {
    this.getUrl = getUrl
  }

  public init(user: IYandexUser) {
    if (!this.initialized) {
      this.client = new WebSocket(this.getUrl(user.id))

      this.client.onopen = function () {
        this.send(JSON.stringify({ type: Types.User, payload: { user } }))
      }

      this.client.onmessage = (evt: MessageEvent<string>) => {
        const { type, payload }: Data = JSON.parse(evt.data)

        if (this.handlers[type]) {
          this.handlers[type].forEach(handler => handler(payload))
        }
      }

      this.initialized = true
    }
  }

  protected send(data: Data) {
    this.client.send(JSON.stringify(data))
  }

  protected subscribe(eventName: Type, handler: Handler) {
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

export { Socket }
