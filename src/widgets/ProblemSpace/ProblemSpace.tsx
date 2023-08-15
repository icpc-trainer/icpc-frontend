import React from 'react'

import { ProblemSpaceChat } from '@widgets/ProblemSpaceChat/ProblemSpaceChat'
import { ProblemSpaceEditorContainer } from '@widgets/ProblemSpaceEditor/ProblemSpaceEditorContainer'
import { ProblemSpaceInfo } from '@widgets/ProblemSpaceInfo/ProblemSpaceInfo'
import { ProblemSpaceListContainer } from '@widgets/ProblemSpaceList/ProblemSpaceListContainer'

import styles from './ProblemSpace.module.css'

export const ProblemSpace = () => {
  return (
    <div className={styles.problemSpace}>
      <ProblemSpaceListContainer />
      <ProblemSpaceInfo />
      <ProblemSpaceChat />
      <ProblemSpaceEditorContainer />
    </div>
  )
}
