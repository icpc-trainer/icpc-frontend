import React, { useContext } from 'react'

import { CodeContext } from '@contexts/codeContext'
import { ThemeContext } from '@contexts/themeContext'
import { useUserControl } from '@hooks/useUserControl'

import { Editor } from '@widgets/ProblemSpaceEditor/components/Editor/Editor'

export const EditorContainer = () => {
  const { hasCurrentUserControl } = useUserControl()

  const { code, onCodeChange } = useContext(CodeContext)
  const { theme } = useContext(ThemeContext)

  const isDisabled = !hasCurrentUserControl

  return <Editor code={code} onCodeChange={onCodeChange} isDisabled={isDisabled} theme={theme} />
}
