import React, { FC } from 'react'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { InputContainer } from '@widgets/ProblemSpaceChat/components/Input/InputContainer'
import { MessageListContainer } from '@widgets/ProblemSpaceChat/components/MessageList/MessageListContainer'

import styles from './ProblemSpaceChat.module.css'

export const ProblemSpaceChat: FC = () => {
  return (
    <BlockWrapper className={styles.blockWrapper}>
      <span className={styles.title}>Комментарии к задаче</span>
      <MessageListContainer />
      <InputContainer />
    </BlockWrapper>
  )
}
