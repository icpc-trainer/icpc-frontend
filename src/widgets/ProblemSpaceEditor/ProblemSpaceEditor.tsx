import React, { FC } from 'react'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { EditorContainer } from '@widgets/ProblemSpaceEditor/components/Editor/EditorContainer'
import { SendCodeButtonContainer } from '@widgets/ProblemSpaceEditor/components/SendButton/SendCodeButtonContainer'

import styles from './ProblemSpaceEditor.module.css'

export const ProblemSpaceEditor: FC = () => {
  return (
    <BlockWrapper className={styles.blockWrapper}>
      <div className={styles.header}>{/*<Select />*/}</div>
      <EditorContainer />
      <SendCodeButtonContainer />
    </BlockWrapper>
  )
}
