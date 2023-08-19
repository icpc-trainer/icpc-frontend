import React, { FC } from 'react'

import { Table } from '@ui/Table/Table'

import { ILeaderBoardRow } from '../../../../types/types'
import { LeaderBoardTableColumns } from '../../constants/LeaderBoardColumns'

export const LeaderBoardTable = ({ leaderBoard }: { leaderBoard: ILeaderBoardRow[] }) => {
  return <Table<ILeaderBoardRow> data={leaderBoard} columns={LeaderBoardTableColumns} />
}

