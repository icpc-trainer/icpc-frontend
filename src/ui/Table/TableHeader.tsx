import React from 'react'

import { IColumnType } from './Table'

import styles from './Table.module.css'

export const TableHeader = <T,>({ columns }: { columns: IColumnType<T>[] }) => {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th className={styles.columnHeader} key={`table-head-cell-${columnIndex}`} style={{ width: column.width }}>
          {column.titleRender ? column.titleRender(column) : column.title}
        </th>
      ))}
    </tr>
  )
}
