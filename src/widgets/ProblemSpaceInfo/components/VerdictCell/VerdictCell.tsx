import classNames from 'classnames'

import React, { FC } from 'react'

import styles from './VerdictCell.module.css'

interface VerdictCellProps {
  verdict: string
}

export const VerdictCell: FC<VerdictCellProps> = ({ verdict }) => {
  const className = classNames({
    [styles.verdict]: true,
    [styles.verdictOk]: verdict === 'OK',
  })

  return <span className={className}>{verdict}</span>
}
