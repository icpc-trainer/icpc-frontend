import classnames from 'classnames'
import React, { FC, useContext } from 'react'

import styles from './Button.module.css'
import { ThemeContext } from '../../contexts/themeContext'

interface Props {
  title: string
  type: 'button' | 'submit'
  onClick: () => void
  disabled: boolean
  className?: string
}

export const Button: FC<Props> = ({ title, type, onClick, disabled, className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const finalClassName = classnames(styles.button, className, styles[theme])

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={finalClassName}>
      {title}
    </button>
  )
}
