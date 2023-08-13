import './ProblemDescription.css'
import * as React from 'react'
import { FC, useState } from 'react'

import { BlockWrapper } from '../../ui/BlockWrapper/BlockWrapper'
import { Loading } from '../../ui/Loading/Loading'
import { ProblemVerdictsContainer } from '../ProblemVerdicts/ProblemVerdictsContainer'
import { ProblemStatusContainer } from './components/ProblemStatus/ProblemStatusContainer'

import styles from './ProblemSpaceDescription.module.css'

interface Props {
  currentProblemDescription: string
  isLoading: boolean
  isError: boolean
  refetch: () => {}
}

// const data: IData[] = [
//   {
//     id: "1",
//     time: "20:35",
//     status: "Решена неверно",
//     points: "0/1",
//   },
//   {
//     id: "2",
//     time: "20:35",
//     status: "Решена неверно",
//     points: "0/1",
//   },
// ]

export const ProblemSpaceDescription: FC<Props> = ({ currentProblemDescription, isLoading, isError, refetch }) => {
  let [activeTab, setActiveTab] = useState('description')

  if (isLoading) {
    return (
      <BlockWrapper className={styles.blockWrapper}>
        <Loading />
      </BlockWrapper>
    )
  }

  if (isError) {
    return (
      <BlockWrapper className={styles.blockWrapper}>
        <div>error</div>
      </BlockWrapper>
    )
  }
  const parser = new DOMParser()
  const descHtml = parser.parseFromString(currentProblemDescription, 'text/html')

  const imgs = descHtml.querySelectorAll('img')

  imgs.forEach((img) => {
    const src = img.getAttribute('src')
    img.setAttribute('src', `https://contest.yandex.ru${src}`)
    img.classList.add('problemDescriptionImg')
  })

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <div className={styles.problemDescriptionHeader}>
        <div className={styles.tabulation}>
          {' '}
          {/* В будущем можно вынести в отдельный компонент */}
          <span
            className={`${styles.tab} ${styles.description} ${activeTab === 'description' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Описание
          </span>
          <span
            className={`${styles.tab} ${styles.solutions} ${activeTab === 'solutions' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('solutions')}
          >
            Отправленные решения
          </span>
        </div>
        <ProblemStatusContainer />
      </div>

      {activeTab === 'description' && (
        <div className={styles.problemDescriptionContent}>
          <div dangerouslySetInnerHTML={{ __html: descHtml.body.innerHTML }} />
          {/*  <div className={styles.problemTitleBlock}>*/}
          {/*    <h3>Считалока 2.0</h3>*/}
          {/*    <span>*/}
          {/*      Дети продолжают запоминать цифры, а мы им помогать Нам вновь называют начало и конец последовательности чисел, а мы выводим их и*/}
          {/*      числа между.*/}
          {/*    </span>*/}
          {/*  </div>*/}

          {/*  <div className={styles.inputTextBlock}>*/}
          {/*    <h3>Формат ввода</h3>*/}
          {/*    <span>Два числа, каждое с новой строки.</span>*/}
          {/*  </div>*/}

          {/*  <div className={styles.outputTextBlock}>*/}
          {/*    <h3>Формат вывода</h3>*/}
          {/*    <span>Все числа от начала до конца (включительно), записанные через пробел.</span>*/}
          {/*  </div>*/}

          {/*  <div className={styles.codeSampleBlock}>*/}
          {/*    <h2>Пример 1</h2>*/}
          {/*    <div className={styles.codeSampleBlockIde}>*/}
          {/*      <h3>Ввод</h3>*/}
          {/*      <p>10</p>*/}
          {/*    </div>*/}
          {/*    <div className={styles.codeSampleBlockIde}>*/}
          {/*      <h3>Вывод</h3>*/}
          {/*      <p>1</p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
        </div>
      )}
      {activeTab === 'solutions' && <ProblemVerdictsContainer />}
    </BlockWrapper>
  )
}
