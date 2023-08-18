import classnames from 'classnames'

import React, { FC } from 'react'

import { IContest } from 'src/types/types'

import styles from './ContestsListItem.module.css'

interface ContestsListItemProps {
  contest: IContest
  onSelect: () => void
  isSelected: boolean
}

export const ContestsListItem: FC<ContestsListItemProps> = ({ contest, onSelect, isSelected }) => {
  const className = classnames({
    [styles.contestsListItem]: true,
    [styles.contestsListItemSelected]: isSelected,
  })

  return (
    <span className={className} onClick={onSelect}>
      {contest.name}
    </span>
  )
}
