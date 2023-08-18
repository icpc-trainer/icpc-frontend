import React, { FC, useContext } from 'react'

import { lobbySocket } from '@sockets/lobby-socket'

import { SelectedContestContext } from '@contexts/contestListContext'

import { ContestsListItem } from '@widgets/ContestsList/components/ContestsListItem/ContestsListItem'

import { IContest } from '../../../../types/types'

interface ContestsListItemProps {
  contest: IContest
}

export const ContestsListItemContainer: FC<ContestsListItemProps> = ({ contest }) => {
  const { selectedContestId } = useContext(SelectedContestContext)

  const onSelect = () => {
    lobbySocket.sendContestSelected({ contestId: contest.id })
  }

  const isSelected = selectedContestId === contest.id

  return <ContestsListItem contest={contest} onSelect={onSelect} isSelected={isSelected} />
}
