import * as React from 'react'

import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.iconContainer}>
      <i className={styles.loader}></i>
    </div>
  )
}
