import React, { FC } from 'react'

import { prepareStatementHTMLString } from '@helpers/prepareStatementHTMLString'

import styles from './Statement.module.css'

interface StatementProps {
  statement: string
}

export const Statement: FC<StatementProps> = ({ statement }) => {
  const htmlString = prepareStatementHTMLString(statement)

  return <div className={styles.statement} dangerouslySetInnerHTML={{ __html: htmlString }} />
}
