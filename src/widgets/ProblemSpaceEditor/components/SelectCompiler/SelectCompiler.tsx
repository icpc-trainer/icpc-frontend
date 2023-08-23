import classnames from 'classnames'

import React, { FC, useContext, useEffect, useRef, useState } from 'react'

import { CompilerSelectedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { ICompilerFull } from '@constants/compilers'
import { CodeContext } from '@contexts/codeContext'

import { Arrow } from '@icons/Arrow'

import { SelectCompilerItem } from '../SelectCompilerItem/SelectCompilerItem'

import styles from './SelectCompiler.module.css'

interface SelectCompilerProps {
  compilers: ICompilerFull[]
}

export const SelectCompiler: FC<SelectCompilerProps> = ({ compilers }) => {
  const { selectedCompiler } = useContext(CodeContext)

  const [isSelectOpen, setSelectOpen] = useState<boolean>(false)
  const selectRef = useRef(null) // Создайте ссылку

  const onToggleSelect = () => setSelectOpen(prevState => !prevState)

  const handleClickOutside: EventListener = event => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setSelectOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside) // Добавьте обработчик события

    return () => {
      document.removeEventListener('click', handleClickOutside) // Очистите обработчик при размонтировании
    }
  }, [])

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
    <div className={styles.select} ref={selectRef}>
      <div className={styles.selectHeader}>
        <span className={styles.selectItem}>{selectedCompiler.name}</span>
        <button onClick={onToggleSelect} className={styles.arrowButton}>
          <Arrow color="var(--color-black-typo-primary)" width={24} height={24} />
        </button>
      </div>
      <div className={selectOptionsClassName}>
        {compilers.map(compiler => {
          console.log(compiler)

          return <SelectCompilerItem key={compiler.id} compiler={compiler} />
        })}
      </div>
    </div>
  )
}
