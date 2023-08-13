import React from 'react'

import { IColumnType } from './Table'
import { TableRowCell } from './TableRowCell'

import styles from './Table.module.css'

export const TableRow = <T,>({ data, columns }: { data: T[]; columns: IColumnType<T>[] }) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr className={styles.tableRow} key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell key={`table-row-cell-${columnIndex}`} item={item} column={column} />
          ))}
        </tr>
      ))}
    </>
  )
}
