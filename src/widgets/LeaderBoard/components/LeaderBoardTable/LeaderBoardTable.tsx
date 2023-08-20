import classNames from 'classnames'

import React, { useState } from 'react'

import { SearchIcon } from '@icons/SearchIcon'
import { IColumnType, Table } from '@ui/Table/Table'

import { ILeaderBoard, ILeaderBoardProblemResult, ILeaderBoardRow } from '../../../../types/types'

import styles from './LeaderBoardTable.module.css'

export const LeaderBoardTable = ({ leaderBoard }: { leaderBoard: ILeaderBoard }) => {
  const [searchQuery, setSearchQuery] = useState('')

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value)
  }

  function getColumns(): IColumnType<ILeaderBoardRow>[] {
    const { titles } = leaderBoard
    return [
      {
        key: 'placeTo',
        title: '№',
        width: 30,
        maxWidth: 50,
        minWidth: 50,
        render: (_, { placeFrom, placeTo }) => (
          <span className={styles.placeNumber}>
            {' '}
            {placeFrom[0] !== placeTo[0] ? `${placeFrom}-${placeTo}` : placeTo}{' '}
          </span>
        ),
      },
      {
        key: 'name',
        title: 'Поиск',
        titleRender: _ => (
          <div className={styles.searchHeader}>
            <div className={styles.searchWrapper}>
              <SearchIcon width={28} height={28} color={'var(--color-grey-secondary)'} />
              <input
                onChange={handleSearchChange}
                className={styles.searchInput}
                value={searchQuery}
                type="text"
                placeholder="Поиск участника"
              />
            </div>
          </div>
        ),
        width: 800,
        render: (_, { participantInfo }) => <div className={styles.teamName}>{participantInfo.name}</div>,
      },
      ...titles.map(({ title }, index) => {
        return {
          key: title,
          title,
          width: 50,
          maxWidth: 100,
          minWidth: 100,
          render: (_: any, { problemResults }: { problemResults: ILeaderBoardProblemResult[] }) => {
            const solution = problemResults[index]
            const sign = solution.status === 'ACCEPTED' ? '+' : '-'
            return (
              <div className={styles.solutionWrapper}>
                {solution.status === 'NOT_SUBMITTED' ? (
                  <span> — </span>
                ) : (
                  <div
                    className={classNames(styles.solution, {
                      [styles.ACCEPTED]: solution.status === 'ACCEPTED',
                      [styles.NOT_ACCEPTED]: solution.status === 'NOT_ACCEPTED',
                    })}
                  >
                    <div>
                      {sign}
                      {solution.submissionCount === '1' ? '' : +solution.submissionCount - 1}
                    </div>
                    <div className={styles.solutionTime}>
                      {new Date(solution.submitDelay * 1000).toISOString().slice(11, 19)}
                    </div>
                  </div>
                )}
              </div>
            )
          },
        }
      }),
      {
        key: 'score',
        title: 'Решено',
        width: 40,
        maxWidth: 80,
        minWidth: 80,
        render: (_, { score }) => <span>{score}</span>,
      },
      {
        key: 'penalty',
        title: 'Штраф',
        width: 40,
        maxWidth: 80,
        minWidth: 80,
        render: (_, { penalty }) => <span>{penalty}</span>,
      },
    ]
  }
  const filteredRows = leaderBoard.rows.filter(row =>
    row.participantInfo.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  return <Table<ILeaderBoardRow> data={filteredRows} columns={getColumns()} />
}
