import React, { useState } from "react"
import { createPortal } from "react-dom"

import { useGetYandexUserQuery } from "../../store/api/user.api"
import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"
import { Loading } from "../../ui/Loading/Loading"
import { MainPageModal } from "../../widgets/MainPageModal/MainPageModal"

import styles from "./Main.module.css"

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data, isLoading, error } = useGetYandexUserQuery()

  if (isLoading) {
    return (
      <BlockWrapper>
        <Loading />
      </BlockWrapper>
    )
  }
  if (!data || error) {
    return (
      <BlockWrapper>
        <div>Error</div>
      </BlockWrapper>
    )
  }

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
            createPortal(<MainPageModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />, document.getElementById("modal")!)}
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
        <ul>
          <li>
            <a href="/">Справка</a>
          </li>
          <li>
            <a href="/">Обратная связь</a>
          </li>
          <li>
            <a href="/">Пользовательское соглашение</a>
          </li>
        </ul>
        <span>
          © 2013–2023 ООО «<a href="/">Яндекс</a>»
        </span>
      </footer>
    </div>
  )
}

export default Main
