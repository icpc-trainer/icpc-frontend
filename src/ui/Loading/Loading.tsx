import * as React from 'react'

import styles from './Loading.module.css'
import { FC } from "react"
import classnames from "classnames"

interface LoadingProps {
  containerClassName?: string
  loaderClassName?: string
}

export const Loading: FC<LoadingProps> = ({ loaderClassName, containerClassName }) => {
  return (
    <div className={classnames(styles.iconContainer, containerClassName)}>
      <i className={classnames(styles.loader, loaderClassName)} />
    </div>
  )
}
