import { IColumnType } from "@ui/Table/Table"
import { ISubmissionChecker } from "../../../types/types"
import classNames from "classnames"
import styles from "*.module.css"
import React from "react"
import { VerdictCell } from "@widgets/ProblemSpaceInfo/components/VerdictCell/VerdictCell"
import { RunningTimeCell } from "@widgets/ProblemSpaceInfo/components/RunningTimeCell/RunningTimeCell"
import { MemoryUsedCell } from "@widgets/ProblemSpaceInfo/components/MemoryUsedCell/MemoryUsedCell"

export const submissionDetailsTestTableColumns: IColumnType<ISubmissionChecker>[] = [
  {
    key: 'sequenceNumber',
    title: '№',
    width: 30,
  },
  {
    key: 'verdict',
    title: 'Вердикт',
    width: 400,
    render: (_, { verdict }) => <VerdictCell verdict={verdict} />,
  },
  {
    key: 'runningTime',
    title: 'Время',
    width: 40,
    render: (_, { runningTime }) => <RunningTimeCell runningTime={runningTime} />,
  },
  {
    key: 'memoryUsed',
    title: 'Память',
    width: 40,
    render: (_, { memoryUsed }) => <MemoryUsedCell memoryUsed={memoryUsed} />,
  },
]
