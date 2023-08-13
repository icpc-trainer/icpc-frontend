import React, { FC, useEffect } from 'react'

import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'

import { BlockWrapper } from '../../ui/BlockWrapper/BlockWrapper'
import { Button } from '../../ui/Button/Button'
import { ProblemSpaceEditorSelect } from './components/ProblemSpaceEditorSelect/ProblemSpaceEditorSelect'

import styles from './ProblemSpaceEditor.module.css'

interface Props {
  onCodeChange: (code: string) => void
  codeState: string
  sendCode: (code: string) => void
  isEditorDisabled: boolean
}

export const ProblemSpaceEditor: FC<Props> = ({ onCodeChange, codeState, sendCode, isEditorDisabled }) => {
  const isSendCodeButtonDisabled = isEditorDisabled

  useEffect(() => {
    const editor = document.querySelector<HTMLDivElement>('.ace_editor')
    const gutter = document.querySelector<HTMLDivElement>('.ace_gutter')

    editor.style.backgroundColor = isEditorDisabled ? 'var(--color-white-grey)' : '#fff'
    gutter.style.backgroundColor = isEditorDisabled ? 'var(--color-white-grey)' : '#fff'
  }, [isEditorDisabled])

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <div className={styles.header}>
        <ProblemSpaceEditorSelect />
      </div>
      <AceEditor
        readOnly={isEditorDisabled}
        mode="javascript"
        value={codeState}
        width="100%"
        height="100%"
        showGutter={true}
        onChange={(code) => onCodeChange(code)}
        setOptions={{
          useWorker: false,
          fontSize: 14,
        }}
      />
      <div className={styles.footer}>
        {/* <span className={styles.alarm}>Редактор бездействует 1 минуту</span> */}
        <Button
          className={styles.sendCodeButton}
          title="Отправить"
          type="button"
          onClick={() => {
            sendCode(codeState)
          }}
          disabled={isSendCodeButtonDisabled}
        />
      </div>
    </BlockWrapper>
  )
}
