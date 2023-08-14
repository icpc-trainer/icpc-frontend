import classnames from 'classnames'

import React, { useState } from 'react'

import { Arrow } from '../../../../ui/icons/Arrow'
import { Check } from '../../../../ui/icons/Check'

import styles from './ProblemSpaceEditorSelect.module.css'

export const ProblemSpaceEditorSelect = () => {
  const [isSelectOpen, setSelectOpen] = useState<boolean>(false)
  const onToggleSelect = () => setSelectOpen(prevState => !prevState)

  const selectOptionsClassName = classnames({
    [styles.selectOptions]: true,
    [styles.selectOptionsOpen]: isSelectOpen,
  })

  return (
    <div className={styles.select}>
      <div className={styles.selectHeader}>
        <span className={styles.selectItem}>JavaScript</span>
        <button onClick={onToggleSelect} className={styles.arrowButton}>
          <Arrow color="var(--color-black-typo-primary)" width={24} height={24} />
        </button>
      </div>
      <div className={selectOptionsClassName}>
        <div className={styles.selectOption}>
          <Check color="var(--color-black-typo-primary)" width={20} height={20} />
          <span className={styles.selectOptionText}>Python</span>
        </div>
        <div>
          <span className={styles.selectOptionText}>Java</span>
        </div>
        <div>
          <span className={styles.selectOptionText}>JS</span>
        </div>
      </div>
    </div>
  )
}
