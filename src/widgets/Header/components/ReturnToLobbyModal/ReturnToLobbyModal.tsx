import React, { FunctionComponent, SetStateAction, useCallback, useEffect, useRef } from 'react'

import styles from './ReturnToLobbyModal.module.css'
import classnames from 'classnames'

interface ReturnToLobbyModalProps {
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
    onCompleteTraining: () => void
}

export const ReturnToLobbyModal: FunctionComponent<ReturnToLobbyModalProps> = ({ isModalOpen, setIsModalOpen, onCompleteTraining }) => {
    const ref = useRef<HTMLDivElement>(null)

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsModalOpen(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleClickOutside])

    useEffect(() => {
        if (isModalOpen) {
            document.querySelector('#modal')?.classList.add('modalOpen')
            document.body.style.overflow = 'hidden'
        } else {
            document.querySelector('#modal')?.classList.remove('modalOpen')
        }
        return () => {
            document.querySelector('#modal')?.classList.remove('modalOpen')
            document.body.style.overflow = 'auto'
        }
    }, [isModalOpen])

    return (
        <div className={styles.modal} ref={ref} onClick={e => e.preventDefault()}>
            <div className={styles.modalHeader}>
                <p className={styles.modalTitle}>{'Хотите завершить тренировку?'}</p>
                <p className={styles.exit} onClick={() => setIsModalOpen(false)}>
                    x
                </p>
            </div>
            <div className={styles.buttons}>
                <button className={classnames(styles.button, styles.buttonYes)} onClick={onCompleteTraining}>Да</button>
                <button className={styles.button} onClick={() => setIsModalOpen(false)}>Нет</button>
            </div>
        </div>
    )
}
