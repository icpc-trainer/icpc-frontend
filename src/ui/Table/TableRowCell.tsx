import get from 'lodash.get'

import React from 'react'

import { IColumnType } from './Table'

import styles from './Table.module.css'

export const TableRowCell = <T,>({ item, column }: { item: T; column: IColumnType<T> }) => {
  const value = get(item, column.key)
  return <td className={styles.tableRowCell}>{column.render ? column.render(column, item) : value}</td>
}
