import React from 'react'

import { IColumnType } from '@ui/Table/Table'
import { PointsCell } from '@widgets/ProblemSpaceInfo/components/PointsCell/PointsCell'
import { StatusCell } from '@widgets/ProblemSpaceInfo/components/StatusCell/StatusCell'
import { TimeCell } from '@widgets/ProblemSpaceInfo/components/TimeCell/TimeCell'

import { ISubmissionFull } from '../../../types/types'

export const submissionDetailsSummaryTableColumns: IColumnType<ISubmissionFull>[] = [
  {
    key: 'time',
    title: 'Время',
    width: 50,
    render: (_, { timeFromStart }) => <TimeCell timeFromStart={timeFromStart} />,
  },
  {
    key: 'status',
    title: 'Статус',
    width: 400,
    render: (_, { verdict }) => <StatusCell verdict={verdict} />,
  },
  {
    key: 'points',
    title: 'Баллы',
    width: 40,
    render: (_, { verdict }) => <PointsCell verdict={verdict} />,
  },
]
