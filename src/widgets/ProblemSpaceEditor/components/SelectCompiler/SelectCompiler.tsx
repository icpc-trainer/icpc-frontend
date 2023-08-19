import classnames from 'classnames'

import React, { FC, useContext, useEffect, useState } from "react"

import { Arrow } from '@icons/Arrow'

import { SelectCompilerItem } from '../SelectCompilerItem/SelectCompilerItem'

import styles from './SelectCompiler.module.css'
import { CodeContext } from "@contexts/codeContext"
import { CompilerSelectedHandler } from "@sockets/types"
import { useParams } from "react-router"
import { workSpaceSocket } from "@sockets/work-space-socket"

interface SelectCompilerProps {
  compilers: string[]
}

export const SelectCompiler: FC<SelectCompilerProps> = ({ compilers }) => {
  const { selectedCompiler } = useContext(CodeContext)

  const [isSelectOpen, setSelectOpen] = useState<boolean>(false)

  const onToggleSelect = () => setSelectOpen(prevState => !prevState)

  const selectOptionsClassName = classnames({
    [styles.selectOptions]: true,
    [styles.selectOptionsOpen]: isSelectOpen,
  })

  const compilerSelectedEventHandler: CompilerSelectedHandler = () => {
    setSelectOpen(false)
  }

  useEffect(() => {
    return workSpaceSocket.subscribeCompilerSelected(compilerSelectedEventHandler)
  }, [])

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
          <SelectCompilerItem key={compiler} compiler={compiler} />
        ))}
      </div>
    </div>
  )
}
