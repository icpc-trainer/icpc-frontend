import React, { FC, useState } from 'react'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { StatementContainer } from '@widgets/ProblemSpaceInfo/components/Statement/StatementContainer'

import { StatusContainer } from './components/Status/StatusContainer'

import styles from './ProblemSpaceInfo.module.css'

import './ProblemSpaceInfo.css'
import { SubmissionsContainer } from "@widgets/ProblemSpaceInfo/components/Submissions/SubmissionsContainer"

export const ProblemSpaceInfo: FC = () => {
  let [activeTab, setActiveTab] = useState('description')

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <div className={styles.problemDescriptionHeader}>
        {/*TODO: компонент табов*/}
        <div className={styles.tabulation}>
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
        <StatusContainer />
      </div>

      {activeTab === 'description' ? <StatementContainer /> : null}

      {activeTab === 'solutions' ? <SubmissionsContainer /> : null}
    </BlockWrapper>
  )
}
