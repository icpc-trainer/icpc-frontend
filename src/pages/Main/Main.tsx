import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import { MainPageModal } from '@widgets/MainPageModal/MainPageModal'

import styles from './Main.module.css'

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.mainPage}>
      <header className={styles.header}>
        <div className={styles.logo}></div>
      </header>
      <div className={styles.options}>
        <div className={styles.optionsContainer}>
          <button className={`${styles.option} ${styles.active}`}>Пробный контест</button>
          <button className={styles.option}>Архив соревнований</button>
          <button className={styles.option}>Настройки компиляторов</button>
          <button className={styles.option}>Значения ошибок</button>
          <button className={styles.option}>Команды</button>
          <button className={styles.option} onClick={() => setIsModalOpen(!isModalOpen)}>
            {`Командная тренировка (ICPC)`}
          </button>
          {isModalOpen &&
            createPortal(
              <MainPageModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
              document.getElementById('modal')!,
            )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <a className={styles.title} href="/">
              Ознакомительный контест
            </a>
            <div className={styles.contentStatus}>
              <div className={styles.firstLine}>26 авг 2023, 23:00:00</div>
              <div className={styles.secondLine}>
                <span className={styles.secondName}>длительность:</span>
                02:00:00
              </div>
            </div>
            <button className={styles.contentButton}>Объявления жюри</button>
          </div>
          <div className={styles.infoContainer}>
            <span>Виртуальное соревнование идет, вы можете стартовать</span>
            <button className={styles.buttonActive}>Стартовать виртуальное соревнование</button>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.contactLinks}>
          <a href="/">Справка</a>

          <a href="/">Обратная связь</a>

          <a href="/">Пользовательское соглашение</a>
        </div>
        <span>
          © 2013–2023 ООО «<a href="/">Яндекс</a>»
        </span>
      </footer>
    </div>
  )
}

export default Main
