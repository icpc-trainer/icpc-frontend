import React, { FC } from 'react'

import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'
import { Message } from '@widgets/ProblemSpaceChat/components/Message/Message'

import { IMessage } from '../../../../types/types'

import styles from './MessageList.module.css'

interface MessageListProps {
  messages: IMessage[]
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  const getMessageKey: GetItemKeyFunction<IMessage> = message => message.id
  const renderMessage: RenderItemFunction<IMessage> = message => <Message message={message} />

  return (
    <List<IMessage>
      data={messages}
      getItemKey={getMessageKey}
      renderItem={renderMessage}
      listClassName={styles.messageList}
    />
  )
}
