import React, { FC } from 'react'

import { Button } from '@ui/Button/Button'

import styles from './SendCodeButton.module.css'

interface SendCodeButtonProps {
  onSendCode: () => void
  isDisabled: boolean
}

export const SendCodeButton: FC<SendCodeButtonProps> = ({ onSendCode, isDisabled }) => {
  return (
    <Button
      className={styles.sendCodeButton}
      title="Отправить"
      type="button"
      onClick={onSendCode}
      disabled={isDisabled}
    />
  )
}
