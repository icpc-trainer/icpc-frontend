import React, { FC } from 'react'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { CommentListContainer } from '@widgets/ProblemSpaceComments/components/CommentList/CommentListContainer'
import { InputContainer } from '@widgets/ProblemSpaceComments/components/Input/InputContainer'

import styles from './ProblemSpaceComments.module.css'

export const ProblemSpaceComments: FC = () => {
  return (
    <BlockWrapper className={styles.blockWrapper}>
      <span className={styles.title}>Комментарии к задаче</span>
      <CommentListContainer />
      <InputContainer />
    </BlockWrapper>
  )
}
