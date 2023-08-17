import React, { FC } from 'react'

import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'

import { IContest } from 'src/types/types'

import { ContestsListItem } from './components/ContestsListItem/ContestsListItem'

import styles from './ContestsList.module.css'

interface ContestsListProps {
  contests: IContest[]
}

export const ContestsList: FC<ContestsListProps> = ({ contests }) => {
  const getContestKey: GetItemKeyFunction<IContest> = (contest: IContest) => contest.id
  const renderContest: RenderItemFunction<IContest> = (contest: IContest) => <ContestsListItem contest={contest} />

  return (
    <List<IContest> listClassName={styles.list} data={contests} getItemKey={getContestKey} renderItem={renderContest} />
  )
}
