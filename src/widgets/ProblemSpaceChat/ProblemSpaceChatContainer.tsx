import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { api } from '../../api'
import { trainingSessionId } from '../../constants/training-session-id'
import { MessageHandler, socket } from '../../sockets'
import { Message } from '../../types/types'
import { ProblemSpaceChat } from './ProblemSpaceChat'

export const ProblemSpaceChatContainer: FC = () => {
  const { alias } = useParams()

  const [messages, setMessages] = useState<Message[]>([])

  const messageEventHandler: MessageHandler = (message) => {
    setMessages((prevState) => [...prevState, message])
  }

  const onSendMessage = (message: string) => {
    api.postMessage(trainingSessionId, alias, message).then(console.log).catch(console.log)
  }

  useEffect(() => {
    api.getMessagesByAlias(trainingSessionId, alias).then(setMessages).catch(console.log)

    return socket.subscribeMessage(messageEventHandler)
  }, [alias])

  return <ProblemSpaceChat messages={messages} onSendMessage={onSendMessage} />
}
