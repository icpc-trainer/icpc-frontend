import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { StatementContainer } from '@widgets/ProblemSpaceInfo/components/Statement/StatementContainer'
import { SubmissionsContainer } from '@widgets/ProblemSpaceInfo/components/Submissions/SubmissionsContainer'

import { StatusContainer } from './components/Status/StatusContainer'

import styles from './ProblemSpaceInfo.module.css'

import './ProblemSpaceInfo.css'

export const ProblemSpaceInfo: FC = () => {
  let [activeTab, setActiveTab] = useState('description')
  const { alias } = useParams()
  useEffect(() => {
    setActiveTab('description')
  }, [alias])

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
