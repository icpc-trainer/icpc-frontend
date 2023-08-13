import classNames from 'classnames'
import React from 'react'

import { BlockWrapper } from '../../ui/BlockWrapper/BlockWrapper'
import { Arrow } from '../../ui/icons/Arrow'
import { Check } from '../../ui/icons/Check'
import { User } from '../../ui/icons/User'

import styles from './Lobby.module.css'

const Lobby = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className={styles.lobby}>
      <div className={styles.contestList}>
        <button className={styles.askQuestion}>Задать вопрос</button>
        <BlockWrapper className={styles.blockWrapper}>
          <div className={styles.contestItem}>
            <a className={styles.contestItemText}>Яндекс.Алгоритм-2018</a>
          </div>
        </BlockWrapper>
      </div>
      <div className={styles.startTraining}>
        <div className={styles.startTrainingWrapper}>
          <button className={styles.startButton}>
            <a href="/workspace">Начать тренировку</a>
          </button>
          <div className={styles.dropdownContainer}>
            <div className={styles.select} onClick={toggleDropdown}>
              <span>Тест_ШМЯ_2023</span>
              <Arrow
                className={classNames(styles.arrow, { [styles.rotated]: isOpen })}
                width={24}
                height={24}
                color={'var(--color-black-typo-primary)'}
              />
            </div>
            {isOpen && (
              <div className={styles.dropdown}>
                <BlockWrapper className={styles.selectItem}>
                  <Check
                    className={classNames(styles.arrow, { [styles.rotated]: isOpen })}
                    width={20}
                    height={20}
                    color={'var(--color-black-typo-primary)'}
                  />
                  <a className={styles.selectItemText} href="/workspace">
                    Тест_ШМЯ_2023
                  </a>
                </BlockWrapper>
                <BlockWrapper className={styles.selectItem}>
                  <a className={styles.selectItemText} href="/workspace">
                    ICPC_Champion
                  </a>
                </BlockWrapper>
              </div>
            )}
          </div>
          <div className={styles.users}>
            <User width={24} height={24} color={'var(--color-black-typo-primary)'} />
            <User width={24} height={24} color={'var(--color-black-typo-primary)'} />
            <User width={24} height={24} color={'var(--color-black-typo-primary)'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lobby
