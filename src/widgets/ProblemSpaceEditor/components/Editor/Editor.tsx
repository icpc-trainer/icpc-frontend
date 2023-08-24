import React, { FC, useEffect } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/theme-cloud9_night'
import 'ace-builds/src-noconflict/theme-clouds'

import { ICompilerFull } from '@constants/compilers'

import './editor-modes'

interface EditorProps {
  code: string
  onCodeChange: (code: string) => void
  isDisabled: boolean
  theme: string
  selectedCompiler: ICompilerFull
}

export const Editor: FC<EditorProps> = ({ code, onCodeChange, isDisabled, theme, selectedCompiler }) => {
  console.log(selectedCompiler.style)

  useEffect(() => {
    const editor = document.querySelector<HTMLDivElement>('.ace_editor')
    const gutter = document.querySelector<HTMLDivElement>('.ace_gutter')

    editor.style.backgroundColor = isDisabled ? 'var(--color-white-grey)' : 'var(--color-white)'
    gutter.style.backgroundColor = isDisabled ? 'var(--color-white-grey)' : 'var(--color-white)'
  }, [isDisabled])

  return (
    <AceEditor
      theme={theme === 'light-theme' ? 'clouds' : 'cloud9_night'}
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
