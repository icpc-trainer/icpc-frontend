import React, { useMemo, useState } from 'react'

import { ProblemSpaceChatContainer } from '../ProblemSpaceChat/ProblemSpaceChatContainer'
import { ProblemSpaceDescriptionContainer } from '../ProblemSpaceDescription/ProblemSpaceDescriptionContainer'
import { ProblemSpaceEditorContainer } from '../ProblemSpaceEditor/ProblemSpaceEditorContainer'
import { ProblemSpaceListContainer } from '../ProblemSpaceList/ProblemSpaceListContainer'

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
