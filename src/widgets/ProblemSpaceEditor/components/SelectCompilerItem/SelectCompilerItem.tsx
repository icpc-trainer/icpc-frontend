import React, { FC, useContext } from 'react'

import { CodeContext } from '@contexts/codeContext'

import { Check } from '@icons/Check'

import styles from './SelectCompilerItem.module.css'
import { workSpaceSocket } from "@sockets/work-space-socket"
import { useParams } from "react-router"

interface SelectCompilerItemProps {
  compiler: string
}

export const SelectCompilerItem: FC<SelectCompilerItemProps> = ({ compiler }) => {
  const { selectedCompiler } = useContext(CodeContext)
  const { alias } = useParams()

  const isSelected = selectedCompiler === compiler

  const onSendCompilerSelected = () => {
    workSpaceSocket.sendCompilerSelected({ compiler, problemAlias: alias })
  }

  return (
    <div onClick={onSendCompilerSelected} className={styles.selectOption}>
      {isSelected && <Check color="var(--color-black-typo-primary)" width={20} height={20} />}
      <span className={styles.selectOptionText}>{compiler}</span>
    </div>
  )
}
