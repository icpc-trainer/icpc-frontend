import classNames from 'classnames'

import React, { FC } from 'react'
import { useParams } from 'react-router'

import { useGetSubmissionFullQuery } from '@store/api/api'

import { Arrow } from '@icons/Arrow'
import { Accordion } from '@ui/Accordion/Accordion'

import { SubmissionDetailsSummaryTable } from '../SubmissionDetailsSummaryTable/SubmissionDetailsSummaryTable'
import { SubmissionDetailsTestTable } from '../SubmissionDetailsTestTable/SubmissionDetailsTestTable'

import styles from './SubmissionDetails.module.css'

const defaultStyle = {
  transition: `transform 500ms ease-in-out`,
  transform: `translateX(150%)`,
}

const transitionStyles = {
  entering: { transform: `translateX(0)` },
  entered: { transform: `translateX(0)` },
  exiting: { transform: `translateX(100%)` },
  exited: { transform: `translateX(150%)` },
  unmounted: { display: 'none' },
}

interface SubmissionDetailsProps {
  state: 'entering' | 'entered' | 'exiting' | 'exited' | 'unmounted'
  submissionId: number
  onCloseDetails: () => void
}

export const SubmissionDetails: FC<SubmissionDetailsProps> = ({ submissionId, state, onCloseDetails }) => {
  const { trainingSessionId } = useParams()

  const { data: submissionFull } = useGetSubmissionFullQuery({ trainingSessionId, submissionId })

  if (!submissionFull) return null

  return (
    <div
      style={{
        ...defaultStyle,
        ...transitionStyles[state],
      }}
      className={classNames(styles.problemSolutionDetails)}
    >
      <div className={styles.detailsHeader}>
        <Arrow
          className={styles.arrowBack}
          width={24}
          height={24}
          color={'var(--color-black-typo-primary)'}
          onClick={onCloseDetails}
        />
        <h3 className={styles.title}>Детализация</h3>
      </div>
      <div className={styles.detailsContent}>
        <div className={styles.detailsTable}>
          <SubmissionDetailsSummaryTable submissionFull={submissionFull} />
        </div>
        <div className={styles.detailsInfo}>
          <Accordion title={'Тесты'}>
            <SubmissionDetailsTestTable checkerLog={submissionFull.checkerLog} />
          </Accordion>
          <Accordion title={'Исходный код'}>
            <div style={{ whiteSpace: 'pre-line' }} className={styles.codeBlock}>
              {submissionFull.source}
            </div>
          </Accordion>
          <Accordion title={'Лог компиляции'}>
            <div style={{ whiteSpace: 'pre-line' }} className={styles.codeBlock}>
              {submissionFull.compileLog}
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
