import React from 'react'
import { useParams } from 'react-router'

import { MessageHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { MessageList } from '@widgets/ProblemSpaceChat/components/MessageList/MessageList'

import { IMessage } from '../../../../types/types'

export const MessageListContainer = () => {
  const { trainingSessionId, alias } = useParams()

  const [messages, setMessages] = React.useState<IMessage[]>([])

  const messageEventHandler: MessageHandler = message => {
    setMessages(prevState => [...prevState, message])
  }

  React.useEffect(() => {
    api.getMessagesByAlias(trainingSessionId, alias).then(setMessages).catch(console.log)

    return workSpaceSocket.subscribeMessage(messageEventHandler)
  }, [alias])

  return <MessageList messages={messages} />
}
