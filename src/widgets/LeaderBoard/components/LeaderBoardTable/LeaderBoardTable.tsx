import classNames from 'classnames'

import React, { FC } from 'react'

import { SearchIcon } from '@icons/SearchIcon'
import { IColumnType, Table } from '@ui/Table/Table'

import { ILeaderBoard, ILeaderBoardRow, ILeaderBoardProblemResult } from '../../../../types/types'

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
        render: (_, { participantInfo }) => <div className={styles.teamName}>{participantInfo.name}</div>,
      },
      ...titles.map(({ title }, index) => {
        return {
          key: title,
          title,
          width: 40,
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
                      {new Date(solution.submitDelay).toISOString().slice(11, 19)}
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

