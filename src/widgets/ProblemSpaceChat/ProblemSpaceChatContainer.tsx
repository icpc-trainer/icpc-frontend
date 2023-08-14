import * as React from 'react'
import { useParams } from 'react-router'

import { socket } from '@sockets/socket'
import { MessageHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { Message } from 'src/types/types'

import { ProblemSpaceChat } from './ProblemSpaceChat'

export const ProblemSpaceChatContainer: React.FC = () => {
  const { alias } = useParams()

  const [messages, setMessages] = React.useState<Message[]>([])

  const messageEventHandler: MessageHandler = message => {
    setMessages(prevState => [...prevState, message])
  }

  const onSendMessage = (message: string) => {
    api.postMessage(trainingSessionId, alias, message).then(console.log).catch(console.log)
  }

  React.useEffect(() => {
    api.getMessagesByAlias(trainingSessionId, alias).then(setMessages).catch(console.log)

    return socket.subscribeMessage(messageEventHandler)
  }, [alias])

  return <ProblemSpaceChat messages={messages} onSendMessage={onSendMessage} />
}
