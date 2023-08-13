import classnames from 'classnames'
import React, { FC } from 'react'

import { Button } from '../../../../ui/Button/Button'

import styles from './ControlButton.module.css'

interface Props {
  isActive: boolean
  onTakeControl: () => void
}

export const ControlButton: FC<Props> = ({ isActive, onTakeControl }) => {
  const controlButtonTitle = isActive ? 'Вы управляющий' : 'Взять управление'

  return (
    <div>
      <Button
        className={styles.takeControlButtonContainer}
        title={controlButtonTitle}
        type="button"
        onClick={onTakeControl}
        disabled={isActive}
      />
    </div>
  )
}
