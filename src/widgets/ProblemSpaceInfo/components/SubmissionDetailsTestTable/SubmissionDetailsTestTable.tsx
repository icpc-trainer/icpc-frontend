import React, { FC } from "react"
import { ISubmissionChecker } from "../../../../types/types"
import { Table } from "@ui/Table/Table"
import { submissionDetailsTestTableColumns } from "@widgets/ProblemSpaceInfo/constants/submissionDetailsTestTableColumns"

interface SubmissionVerdictDetailsTestTableProps {
  checkerLog: ISubmissionChecker[]
}

export const SubmissionDetailsTestTable: FC<SubmissionVerdictDetailsTestTableProps> = ({ checkerLog }) => {
  return (
    <Table<ISubmissionChecker> data={checkerLog} columns={submissionDetailsTestTableColumns} />
  )
}
