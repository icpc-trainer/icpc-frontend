import React, { FC } from 'react'

import { Button } from '@ui/Button/Button'

import styles from './FinishButton.module.css'

export const FinishButton: FC = () => {
  return (
    <Button
      className={styles.finishButton}
      title="Завершить тренировку"
      type="button"
      onClick={() => {}}
      disabled={false}
    />
  )
}
