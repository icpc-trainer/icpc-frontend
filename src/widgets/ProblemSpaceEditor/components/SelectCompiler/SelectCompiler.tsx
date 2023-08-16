import classnames from 'classnames'

import React, { FC, useState } from 'react'

import { Arrow } from '@icons/Arrow'
import { Check } from '@icons/Check'

import styles from './SelectCompiler.module.css'

interface SelectCompilerProps {
  compilers: string[]
  selectedCompiler: string
  setSelectedCompiler: (compiler: string) => void
}

export const SelectCompiler: FC<SelectCompilerProps> = ({ compilers, selectedCompiler, setSelectedCompiler }) => {
  const [isSelectOpen, setSelectOpen] = useState<boolean>(false)

  const onToggleSelect = () => setSelectOpen(prevState => !prevState)

  const handleSelectCompiler = (compiler: string) => {
    setSelectedCompiler(compiler)
    setSelectOpen(false)
  }

  const selectOptionsClassName = classnames({
    [styles.selectOptions]: true,
    [styles.selectOptionsOpen]: isSelectOpen,
  })

  return (
    <div className={styles.select}>
      <div className={styles.selectHeader}>
        <span className={styles.selectItem}>{selectedCompiler}</span>
        <button onClick={onToggleSelect} className={styles.arrowButton}>
          <Arrow color="var(--color-black-typo-primary)" width={24} height={24} />
        </button>
      </div>
      <div className={selectOptionsClassName}>
        {compilers.map(compiler => (
          <div key={compiler} onClick={() => handleSelectCompiler(compiler)} className={styles.selectOption}>
            {selectedCompiler === compiler && <Check color="var(--color-black-typo-primary)" width={20} height={20} />}
            <span className={styles.selectOptionText}>{compiler}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
