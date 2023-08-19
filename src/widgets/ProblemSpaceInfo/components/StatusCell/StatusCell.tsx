import classnames from 'classnames'

import React, { FC } from 'react'

import { Loading } from '@ui/Loading/Loading'

import styles from './StatusCell.module.css'
import { isSubmissionPending } from "@helpers/isSubmissionPending"

interface StatusCellProps {
  verdict: string
}

export const StatusCell: FC<StatusCellProps> = ({ verdict }) => {
  const isPending = isSubmissionPending(verdict)
  const isOk = verdict === 'OK'

  const className = classnames({
    [styles.status]: true,
    [styles.statusOk]: isOk,
    [styles.statusPending]: isPending,
  })

  const status = isPending ? 'Тестируется' : verdict

  return (
    <span className={className}>
      {status}
      {isPending ? (
        <Loading containerClassName={styles.statusLoadingContainer} loaderClassName={styles.statusLoading} />
      ) : null}
    </span>
  )
}
