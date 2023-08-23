import React, { FC } from 'react'

import { Button } from '@ui/Button/Button'

import styles from './ReturnToLobbyButton.module.css'

interface ReturnToLobbyButtonProps {
  onOpenModal: () => void
}

export const ReturnToLobbyButton: FC<ReturnToLobbyButtonProps> = ({ onOpenModal }) => {
  return (
    <Button
      className={styles.ReturnToLobbyButton}
      title="Вернуться в лобби"
      type="button"
      onClick={onOpenModal}
      disabled={false}
    />
  )
}
