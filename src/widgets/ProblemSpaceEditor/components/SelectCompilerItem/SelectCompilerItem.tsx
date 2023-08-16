import React, { FC, useContext } from 'react'

import { CodeContext } from '@contexts/codeContext'

import { Check } from '@icons/Check'

import styles from './SelectCompilerItem.module.css'

interface SelectCompilerItemProps {
  compiler: string
  handleSelectCompiler: (compiler: string) => void
}
export const SelectCompilerItem: FC<SelectCompilerItemProps> = ({ handleSelectCompiler, compiler }) => {
  const { selectedCompiler } = useContext(CodeContext)
  const isSelected = selectedCompiler === compiler

  return (
    <div onClick={() => handleSelectCompiler(compiler)} className={styles.selectOption}>
      {isSelected && <Check color="var(--color-black-typo-primary)" width={20} height={20} />}
      <span className={styles.selectOptionText}>{compiler}</span>
    </div>
  )
}
