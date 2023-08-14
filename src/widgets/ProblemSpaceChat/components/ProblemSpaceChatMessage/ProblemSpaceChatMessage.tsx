import React, { FunctionComponent } from 'react'

import { Message } from 'src/types/types'

import styles from './ProblemSpaceChatMessage.module.css'

interface ProblemSpaceChatMessageProps {
  message: Message
}

export const ProblemSpaceChatMessage: FunctionComponent<ProblemSpaceChatMessageProps> = ({ message }) => {
  return (
    <div className={styles.comment}>
      {message.userLogin}: <span>{message.content}</span>
    </div>
  )
}
