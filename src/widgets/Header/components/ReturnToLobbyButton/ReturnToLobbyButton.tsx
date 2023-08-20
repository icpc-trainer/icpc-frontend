import React, { FC } from 'react'

import { Button } from '@ui/Button/Button'

import styles from './ReturnToLobbyButton.module.css'

interface  ReturnToLobbyButtonProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ReturnToLobbyButton: FC<ReturnToLobbyButtonProps> = ({setIsModalOpen}) => {
  return (
    <Button
      className={styles.ReturnToLobbyButton}
      title="Вернуться на главную"
      type="button"
      onClick={()=>setIsModalOpen(true)}
      disabled={false}
    />
  )
}
