import classnames from 'classnames'

import React, { FunctionComponent, SetStateAction, useCallback, useEffect, useRef } from 'react'

import styles from './ReturnToLobbyModal.module.css'

interface ReturnToLobbyModalProps {
  onClose: () => void
  onCompleteTraining: () => void
}

export const ReturnToLobbyModal: FunctionComponent<ReturnToLobbyModalProps> = ({ onClose, onCompleteTraining }) => {
  return (
    <div className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>{'Хотите завершить тренировку?'}</p>
          <p className={styles.exit} onClick={onClose}>
            x
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={classnames(styles.button, styles.buttonYes)} onClick={onCompleteTraining}>
            Да
          </button>
          <button className={styles.button} onClick={onClose}>
            Нет
          </button>
        </div>
      </div>
    </div>
  )
}
