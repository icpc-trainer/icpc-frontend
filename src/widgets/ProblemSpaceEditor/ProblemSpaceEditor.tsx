import React, { FC, useContext } from 'react'

import { CodeContext } from '@contexts/codeContext'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { EditorContainer } from '@widgets/ProblemSpaceEditor/components/Editor/EditorContainer'
import { SendCodeButtonContainer } from '@widgets/ProblemSpaceEditor/components/SendButton/SendCodeButtonContainer'

import { SelectCompilerContainer } from './components/SelectCompiler/SelectCompilerContainer'

import styles from './ProblemSpaceEditor.module.css'

export const ProblemSpaceEditor: FC = () => {
  const { compilers, selectedCompiler } = useContext(CodeContext)

  if (!compilers || !selectedCompiler) {
    return <BlockWrapper className={styles.blockWrapper}>{null}</BlockWrapper>
  }

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <div className={styles.header}>
        <SelectCompilerContainer />
      </div>
      <EditorContainer />
      <SendCodeButtonContainer />
    </BlockWrapper>
  )
}
