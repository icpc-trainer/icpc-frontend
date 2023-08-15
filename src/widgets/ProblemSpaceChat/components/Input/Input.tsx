import React, { ChangeEventHandler, FC, KeyboardEventHandler } from 'react'

import styles from './Input.module.css'

interface InputProps {
  value: string
  rows: number
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  onKeyDown: KeyboardEventHandler<HTMLTextAreaElement>
}

export const Input: FC<InputProps> = ({ value, rows, onChange, onKeyDown }) => {
  return (
    <textarea
      rows={rows}
      className={styles.input}
      placeholder="Текст для ввода"
      id="message"
      name="message"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}
