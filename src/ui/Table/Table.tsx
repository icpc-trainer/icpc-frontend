import React from 'react'

import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'

import styles from './Table.module.css'

export interface IColumnType<T> {
  key: string
  title: string
  width?: number
  render?: (column: IColumnType<T>, item: T) => void
}

export const Table = <T,>({ data, columns }: { data: T[]; columns: IColumnType<T>[] }) => {
  return (
    <table className={styles.table}>
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        <TableRow data={data} columns={columns} />
      </tbody>
    </table>
  )
}
