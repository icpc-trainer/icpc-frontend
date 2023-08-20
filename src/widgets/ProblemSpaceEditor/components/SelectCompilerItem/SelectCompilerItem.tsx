import React, { FC, useContext } from 'react'
import { useParams } from 'react-router'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { ICompilerFull } from '@constants/compilers'
import { CodeContext } from '@contexts/codeContext'

import { Check } from '@icons/Check'

import styles from './SelectCompilerItem.module.css'

interface SelectCompilerItemProps {
  compiler: ICompilerFull
}

export const SelectCompilerItem: FC<SelectCompilerItemProps> = ({ compiler }) => {
  const { selectedCompiler } = useContext(CodeContext)
  const { alias } = useParams()

  const isSelected = selectedCompiler === compiler

  const onSendCompilerSelected = () => {
    workSpaceSocket.sendCompilerSelected({ compiler: compiler.id, problemAlias: alias })
  }

  return (
    <div onClick={onSendCompilerSelected} className={styles.selectOption}>
      {isSelected && <Check color="var(--color-black-typo-primary)" width={20} height={20} />}
      <span className={styles.selectOptionText}>{compiler.name}</span>
    </div>
  )
}
