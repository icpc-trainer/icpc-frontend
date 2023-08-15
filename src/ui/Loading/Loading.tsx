import classnames from 'classnames'

import * as React from 'react'
import { FC } from 'react'

import styles from './Loading.module.css'

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
