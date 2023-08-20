import React, { FC } from 'react'

import { Button } from '@ui/Button/Button'

import styles from './SendCodeButton.module.css'

interface SendCodeButtonProps {
  onSendCode: () => void
  isDisabled: boolean
  isSameCode: boolean
}

export const SendCodeButton: FC<SendCodeButtonProps> = ({ onSendCode, isDisabled, isSameCode }) => {
  return (
    <div className={styles.sendCodeButtonContainer}>
      <Button
        className={styles.sendCodeButton}
        title="Отправить"
        type="button"
        onClick={onSendCode}
        disabled={isDisabled}
      />
      {isSameCode ? <span className={styles.sameCodeMessage}>Данное решение уже отправлялось</span> : null}
    </div>
  )
}
