import React from 'react'

import { IColumnType } from '@ui/Table/Table'
import { ILeaderBoardRow } from 'src/types/types'


export const LeaderBoardTableColumns: IColumnType<ILeaderBoardRow>[] = [
  {
    key: 'place',
    title: '№',
    width: 30,
    render: (_, { placeTo }) => {},
  },
  {
    key: 'name',
    title: 'Поиск',
    width: 400,
    render: (_, { participantInfo }) => {},
  },
  {
    key: 'A',
    title: 'A',
    width: 40,
    render: (_, { problemResults }) => {},
  },
  {
    key: 'score',
    title: 'Решено',
    width: 40,
    render: (_, { problemResults }) => {},
  },
  {
    key: 'penalty',
    title: 'Штраф',
    width: 40,
    render: (_, { problemResults }) => {},
  },

]

