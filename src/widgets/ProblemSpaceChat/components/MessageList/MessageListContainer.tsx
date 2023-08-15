import React from 'react'
import { useParams } from 'react-router'

import { socket } from '@sockets/socket'
import { MessageHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { MessageList } from '@widgets/ProblemSpaceChat/components/MessageList/MessageList'

import { IMessage } from '../../../../types/types'

export const MessageListContainer = () => {
  const { alias } = useParams()

  const [messages, setMessages] = React.useState<IMessage[]>([])

  const messageEventHandler: MessageHandler = message => {
    setMessages(prevState => [...prevState, message])
  }

  React.useEffect(() => {
    api.getMessagesByAlias(trainingSessionId, alias).then(setMessages).catch(console.log)

    return socket.subscribeMessage(messageEventHandler)
  }, [alias])

  return <MessageList messages={messages} />
}
