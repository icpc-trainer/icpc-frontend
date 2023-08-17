import React, { FC } from 'react'

import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'
import { ContestsListItemContainer } from '@widgets/ContestsList/components/ContestsListItem/ContestsListItemContainer'

import { IContest } from 'src/types/types'

import styles from './ContestsList.module.css'

interface ContestsListProps {
  contests: IContest[]
}

export const ContestsList: FC<ContestsListProps> = ({ contests }) => {
  const getContestKey: GetItemKeyFunction<IContest> = (contest: IContest) => contest.id
  const renderContest: RenderItemFunction<IContest> = (contest: IContest) => (
    <ContestsListItemContainer contest={contest} />
  )

  return (
    <List<IContest> listClassName={styles.list} data={contests} getItemKey={getContestKey} renderItem={renderContest} />
  )
}
