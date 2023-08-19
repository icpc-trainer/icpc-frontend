import React from 'react'

import { IColumnType } from '@ui/Table/Table'
import { DetailsCell } from '@widgets/ProblemSpaceInfo/components/DetailsCell/DetailsCell'
import { PointsCell } from '@widgets/ProblemSpaceInfo/components/PointsCell/PointsCell'
import { StatusCell } from '@widgets/ProblemSpaceInfo/components/StatusCell/StatusCell'
import { TimeCell } from '@widgets/ProblemSpaceInfo/components/TimeCell/TimeCell'
import { ISubmissionTableItem } from '@widgets/ProblemSpaceInfo/helpers/getSubmissionTableData'
import { isSubmissionPending } from "@helpers/isSubmissionPending"

export const submissionTableColumns: IColumnType<ISubmissionTableItem>[] = [
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
  {
    key: 'details',
    title: '',
    width: 32,
    render: (_, submissionTableItem) => <DetailsCell submissionTableItem={submissionTableItem} />,
  },
]
