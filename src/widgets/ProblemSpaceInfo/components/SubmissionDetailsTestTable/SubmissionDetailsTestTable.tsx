import React, { FC } from 'react'

import { Table } from '@ui/Table/Table'
import { submissionDetailsTestTableColumns } from '@widgets/ProblemSpaceInfo/constants/submissionDetailsTestTableColumns'

import { ISubmissionChecker } from '../../../../types/types'

interface SubmissionVerdictDetailsTestTableProps {
  checkerLog: ISubmissionChecker[]
}

export const SubmissionDetailsTestTable: FC<SubmissionVerdictDetailsTestTableProps> = ({ checkerLog }) => {
  return <Table<ISubmissionChecker> data={checkerLog} columns={submissionDetailsTestTableColumns} />
}
