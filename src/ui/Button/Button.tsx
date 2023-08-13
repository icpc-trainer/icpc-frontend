import classnames from 'classnames'
import React, { FC } from 'react'

import styles from './Button.module.css'

interface Props {
  title: string
  type: 'button' | 'submit'
  onClick: () => void
  disabled: boolean
  className?: string
}

export const Button: FC<Props> = ({ title, type, onClick, disabled, className }) => {
  const finalClassName = classnames(styles.button, className)

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={finalClassName}>
      {title}
    </button>
  )
}
