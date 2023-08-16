import React, { FC } from "react"
import { ISubmission } from "../../../../types/types"
import { Table } from "@ui/Table/Table"
import {
  getSubmissionTableData,
  ISubmissionTableItem,
  OnOpenDetails,
} from "@widgets/ProblemSpaceInfo/helpers/getSubmissionTableData"
import { submissionTableColumns } from "@widgets/ProblemSpaceInfo/constants/submissionTableColumns"

interface VerdictTableProps {
  submissions: ISubmission[]
  onOpenDetails: OnOpenDetails
}

export const SubmissionTable: FC<VerdictTableProps> = ({ submissions, onOpenDetails }) => {
  const data = getSubmissionTableData(submissions, onOpenDetails)

  return (
    <Table<ISubmissionTableItem> data={data} columns={submissionTableColumns} />
  )
}
