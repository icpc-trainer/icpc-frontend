import classnames from 'classnames'

import React, { FC, PropsWithChildren } from 'react'

import styles from './Section.module.css'

interface SectionProps {
  className?: string
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ children, className }) => {
  return <div className={classnames(styles.section, className)}>{children}</div>
}
