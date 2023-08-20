import React, { FC, useEffect } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-golang'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/theme-solarized_light'

import { ICompilerFull } from '@constants/compilers'

interface EditorProps {
  code: string
  onCodeChange: (code: string) => void
  isDisabled: boolean
  theme: string
  selectedCompiler: ICompilerFull
}

export const Editor: FC<EditorProps> = ({ code, onCodeChange, isDisabled, theme, selectedCompiler }) => {
  useEffect(() => {
    const editor = document.querySelector<HTMLDivElement>('.ace_editor')
    const gutter = document.querySelector<HTMLDivElement>('.ace_gutter')

    editor.style.backgroundColor = isDisabled ? 'var(--color-white-grey)' : 'var(--color-white)'
    gutter.style.backgroundColor = isDisabled ? 'var(--color-white-grey)' : 'var(--color-white)'
  }, [isDisabled])

  return (
    <AceEditor
      theme={theme === 'light-theme' ? 'solarized_light' : 'solarized_dark'}
      readOnly={isDisabled}
      mode={selectedCompiler.style}
      value={code}
      width="100%"
      height="100%"
      showGutter={true}
      onChange={onCodeChange}
      setOptions={{
        useWorker: false,
        fontSize: 14,
      }}
    />
  )
}
