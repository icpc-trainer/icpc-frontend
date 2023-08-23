import React, { FC } from 'react'

import { ProblemSpaceComments } from '@widgets/ProblemSpaceComments/ProblemSpaceComments'
import { ProblemSpaceEditorContainer } from '@widgets/ProblemSpaceEditor/ProblemSpaceEditorContainer'
import { ProblemSpaceInfo } from '@widgets/ProblemSpaceInfo/ProblemSpaceInfo'
import { ProblemSpaceListContainer } from '@widgets/ProblemSpaceList/ProblemSpaceListContainer'

import styles from './ProblemSpace.module.css'

export const ProblemSpace: FC = () => {
  return (
    <div className={styles.problemSpace}>
      <ProblemSpaceListContainer />
      <ProblemSpaceInfo />
      <ProblemSpaceComments />
      <ProblemSpaceEditorContainer />
    </div>
  )
}
