import classnames from 'classnames'

import React, { FC } from 'react'

import { ProblemStatuses } from '../../../../types/types'

import styles from './Status.module.css'

const statusMap: Record<string, string> = {
  [ProblemStatuses.NotSubmitted]: 'Не решена',
  [ProblemStatuses.Failed]: 'Решена неверно',
  [ProblemStatuses.Passed]: 'Полное решение',
}

interface ProblemStatusProps {
  status: string
}

export const Status: FC<ProblemStatusProps> = ({ status }) => {
  const className = classnames({
    [styles.problemStatus]: true,
    [styles.problemStatusFailed]: status === ProblemStatuses.Failed,
    [styles.problemStatusPassed]: status === ProblemStatuses.Passed,
  })

  return <span className={className}>{statusMap[status]}</span>
}
