import React, { FC } from 'react'

import { Table } from '@ui/Table/Table'
import { submissionDetailsSummaryTableColumns } from '@widgets/ProblemSpaceInfo/constants/submissionDetailsSummaryTableColumns'

import { ISubmissionFull } from '../../../../types/types'

interface SubmissionDetailsSummaryTableItem {
  submissionFull: ISubmissionFull
}

export const SubmissionDetailsSummaryTable: FC<SubmissionDetailsSummaryTableItem> = ({ submissionFull }) => {
  return <Table<ISubmissionFull> data={[submissionFull]} columns={submissionDetailsSummaryTableColumns} />
}
