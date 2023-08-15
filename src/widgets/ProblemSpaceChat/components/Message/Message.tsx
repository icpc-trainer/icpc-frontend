import React, { FunctionComponent } from 'react'

import { IMessage } from 'src/types/types'

import styles from './Message.module.css'

interface ProblemSpaceChatMessageProps {
  message: IMessage
}

export const Message: FunctionComponent<ProblemSpaceChatMessageProps> = ({ message }) => {
  return (
    <div className={styles.message}>
      {message.userLogin}: <span>{message.content}</span>
    </div>
  )
}
