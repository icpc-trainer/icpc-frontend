import React, { FC } from 'react'

import { IContest } from 'src/types/types'

import styles from './ContestsListItem.module.css'

interface ContestsListItemProps {
  contest: IContest
}

export const ContestsListItem: FC<ContestsListItemProps> = ({ contest }) => {
  return <span className={styles.text}>{contest.name}</span>
}
