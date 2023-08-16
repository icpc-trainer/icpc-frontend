import React, { FC } from "react"
import classnames from "classnames"
import styles from "./StatusCell.module.css"
import { Loading } from "@ui/Loading/Loading"

interface StatusCellProps {
  verdict: string
}

export const StatusCell: FC<StatusCellProps> = ({ verdict }) => {
  const isPending = verdict === 'No report' || verdict === ''
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
      {isPending
        ? <Loading containerClassName={styles.statusLoadingContainer} loaderClassName={styles.statusLoading} />
        : null
      }
    </span>
  )
}
