import classnames from 'classnames'
import React, { FC } from 'react'

import styles from './ProblemStatus.module.css'

const statusMap: Record<string, string> = {
  NOT_SUBMITTED: 'Не решена',
  FAILED: 'Решена неверно',
  PASSED: 'Полное решение',
}

interface ProblemStatusProps {
  status: string
}

export const ProblemStatus: FC<ProblemStatusProps> = ({ status }) => {
  const className = classnames({
    [styles.problemStatus]: true,
    [styles.problemStatusFailed]: status === 'FAILED',
    [styles.problemStatusPassed]: status === 'PASSED',
  })

  return <span className={className}>{statusMap[status]}</span>
}
