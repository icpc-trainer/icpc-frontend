import React, { FunctionComponent, SetStateAction, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { TeamListContainer } from '@widgets/MainPageTeamList/TeamListContainer'

import styles from './MainPageModal.module.css'

interface MainPageModalProps {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
}

export const MainPageModal: FunctionComponent<MainPageModalProps> = ({ isModalOpen, setIsModalOpen }) => {
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
        <p className={styles.modalTitle}>Выберите команду</p>
        <p className={styles.exit} onClick={() => setIsModalOpen(false)}>
          x
        </p>
      </div>
      <TeamListContainer />
      {/* <p className="description">Вы уверены, что хотите удалить билет?</p>
            <div className="buttons">
                <button className="buttonYes" onClick={() => {}}>Да</button>
                <button className="buttonNo" onClick={() => setIsModalOpen(false)}>Нет</button>
            </div> */}
    </div>
  )
}
