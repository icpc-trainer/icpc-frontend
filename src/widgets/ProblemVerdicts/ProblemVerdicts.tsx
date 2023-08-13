import classnames from 'classnames'
import React, { FC, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import { Submission } from '../../types/types'
import { Loading } from '../../ui/Loading/Loading'
import { IColumnType, Table } from '../../ui/Table/Table'
import { Arrow } from '../../ui/icons/Arrow'
import { ProblemVerdict } from './components/ProblemVerdict/ProblemVerdict'

import styles from './ProblemVerdicts.module.css'

export interface ProblemVerdictsProps {
  verdicts: Submission[]
}

export const ProblemVerdicts: FC<ProblemVerdictsProps> = ({ verdicts }) => {
  const [isDetailsOpen, setDetailsOpen] = useState(false)

  const [solutionId, setSolutionId] = useState(0)

  function openDetails(id: number) {
    setDetailsOpen(true)
    setSolutionId(id)
  }

  const nodeRef = useRef(null)

  const columns: IColumnType<Submission>[] = [
    {
      key: 'time',
      title: 'Время',
      width: 50,
      render: (_, { timeFromStart }) => (
        <span className={styles.row}>{new Date(timeFromStart).toISOString().slice(11, 19)}</span>
      ),
    },
    {
      key: 'status',
      title: 'Статус',
      width: 400,
      render: (_, { verdict }) => {
        const isPending = verdict === 'No report' || verdict === ''
        const isOk = verdict === 'OK'

        const className = classnames({
          [styles.row]: true,
          [styles.verdictStatus]: true,
          [styles.verdictStatusOk]: isOk,
          [styles.verdictStatusPending]: isPending,
        })

        const content = isPending ? 'Тестируется' : verdict

        return (
          <span className={className}>
            {content}
            {isPending ? (
              <Loading containerClassName={styles.loadingContainer} loaderClassName={styles.loading} />
            ) : null}
          </span>
        )
      },
    },
    {
      key: 'points',
      title: 'Баллы',
      width: 40,
      render: (_, { verdict }) => <span className={styles.row}>{verdict === 'OK' ? '1' : '0'}</span>,
    },
    {
      key: 'details',
      title: '',
      width: 32,
      render: (_, { id }) => (
        <>
          <Arrow
            className={styles.detailsArrow}
            width={20}
            height={20}
            color={'var(--color-grey-secondary)'}
            onClick={() => openDetails(id)}
          />
        </>
      ),
    },
  ]

  return (
    <div className={styles.ProblemVerdicts}>
      <Table<Submission> data={verdicts} columns={columns} />
      <Transition nodeRef={nodeRef} in={isDetailsOpen} timeout={500}>
        {(state) => <ProblemVerdict state={state} solutionId={solutionId} goBack={(flag) => setDetailsOpen(flag)} />}
      </Transition>
    </div>
  )
}
