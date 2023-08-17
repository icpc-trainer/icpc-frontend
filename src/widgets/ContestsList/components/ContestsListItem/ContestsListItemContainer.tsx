import React, { FC, useContext } from 'react'

import { ContestListContext } from '@contexts/contestListContext'

import { ContestsListItem } from '@widgets/ContestsList/components/ContestsListItem/ContestsListItem'

import { IContest } from '../../../../types/types'

interface ContestsListItemProps {
  contest: IContest
}

export const ContestsListItemContainer: FC<ContestsListItemProps> = ({ contest }) => {
  const { onSelectContest, selectedContestId } = useContext(ContestListContext)

  const onSelect = () => onSelectContest(contest.id)

  const isSelected = selectedContestId === contest.id

  return <ContestsListItem contest={contest} onSelect={onSelect} isSelected={isSelected} />
}
