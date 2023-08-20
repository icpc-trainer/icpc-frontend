import React, { MouseEventHandler, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { TrainingFinishedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import styles from './FinishPopup.module.css'

export const FinishPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onClose = () => {
    setIsOpen(false)
  }

  const onPopupClick: MouseEventHandler = event => {
    event.stopPropagation()
  }

  const trainingFinishedEventHandler: TrainingFinishedHandler = () => {
    console.log('popup')
    setIsOpen(true)
  }

  useEffect(() => {
    return workSpaceSocket.subscribeTrainingFinished(trainingFinishedEventHandler)
  }, [])

  if (!isOpen) return null

  return createPortal(
    <div className={styles.finishPopupContainer} onClick={onClose}>
      <div className={styles.finishPopup} onClick={onPopupClick}>
        А всё уже, всё, надо было раньше...
      </div>
    </div>,
    document.getElementById('modal')!,
  )
}
