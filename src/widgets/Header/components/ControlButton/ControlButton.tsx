import React, { FC } from 'react'

import { Button } from '@ui/Button/Button'

import styles from './ControlButton.module.css'

interface Props {
  isDisabled: boolean
  onTakeControl: () => void
}

export const ControlButton: FC<Props> = ({ isDisabled, onTakeControl }) => {
  const controlButtonTitle = isDisabled ? 'Вы управляющий' : 'Взять управление'

  return (
    <div>
      <Button
        className={styles.takeControlButtonContainer}
        title={controlButtonTitle}
        type="button"
        onClick={onTakeControl}
        disabled={isDisabled}
      />
    </div>
  )
}
