import React from 'react'

import { ProblemSpaceChatContainer } from '@widgets/ProblemSpaceChat/ProblemSpaceChatContainer'
import { ProblemSpaceDescriptionContainer } from '@widgets/ProblemSpaceDescription/ProblemSpaceDescriptionContainer'
import { ProblemSpaceEditorContainer } from '@widgets/ProblemSpaceEditor/ProblemSpaceEditorContainer'
import { ProblemSpaceListContainer } from '@widgets/ProblemSpaceList/ProblemSpaceListContainer'

import styles from './ProblemSpace.module.css'

export const ProblemSpace = () => {
  return (
    <div className={styles.problemSpace}>
      <ProblemSpaceListContainer />
      <ProblemSpaceDescriptionContainer />
      <ProblemSpaceChatContainer />
      <ProblemSpaceEditorContainer />
    </div>
  )
}
