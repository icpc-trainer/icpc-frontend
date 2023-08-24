import React, { MouseEventHandler, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { ContestFinishedHandler } from '@sockets/types'
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

  const contestFinishedEventHandler: ContestFinishedHandler = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    return workSpaceSocket.subscribeContestFinished(contestFinishedEventHandler)
  }, [])

  if (!isOpen) return null

  return createPortal(
    <div className={styles.finishPopupContainer} onClick={onClose}>
      <div className={styles.finishPopup} onClick={onPopupClick}>
        <div className={styles.finishPopupHeader}>
          <p>Тренировка закончилась</p>
          <p>Спасибо за участие!</p>
        </div>
        <div className={styles.finishPopupDescription}>
          <p>Ваши результаты сохранены в контесте</p>
          <p>Вы можете дорешать оставшиеся задачи вне конкурса</p>
          <p>(без изменения статистики)</p>
        </div>
      </div>
    </div>,
    document.getElementById('modal')!,
  )
}
