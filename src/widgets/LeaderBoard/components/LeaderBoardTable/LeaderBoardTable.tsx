import React, { FC } from 'react'

import { SearchIcon } from '@icons/SearchIcon'
import { IColumnType, Table } from '@ui/Table/Table'

import { ILeaderBoard, ILeaderBoardRow } from '../../../../types/types'

import styles from './LeaderBoardTable.module.css'

export const LeaderBoardTable = ({ leaderBoard }: { leaderBoard: ILeaderBoard }) => {
  function getColumns(): IColumnType<ILeaderBoardRow>[] {
    const { titles } = leaderBoard
    return [
      {
        key: 'placeTo',
        title: '№',
        width: 30,
        render: (_, { placeTo }) => <span> {placeTo} </span>,
      },
      {
        key: 'name',
        title: 'Поиск',
        titleRender: _ => (
          <div className={styles.searchHeader}>
            <div className={styles.searchWrapper}>
              <SearchIcon width={28} height={28} color={'var(--color-grey-secondary)'} />
              <input className={styles.searchInput} type="text" placeholder="Поиск участника" />
            </div>
          </div>
        ),
        width: 500,
        render: (_, { participantInfo }) => <div>{participantInfo.name}</div>,
      },
      ...titles.map(({ title }) => {
        return {
          key: title,
          title,
          width: 40,
        }
      }),
      {
        key: 'score',
        title: 'Решено',
        width: 40,
        render: (_, { score }) => <span>{score}</span>,
      },
      {
        key: 'penalty',
        title: 'Штраф',
        width: 40,
        render: (_, { problemResults }) => <span>{3223}</span>,
      },
    ]
  }
  const { rows: leaderBoardRows } = leaderBoard
  return <Table<ILeaderBoardRow> data={leaderBoardRows} columns={getColumns()} />
}

