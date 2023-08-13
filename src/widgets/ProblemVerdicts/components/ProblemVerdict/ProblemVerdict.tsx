import classNames from "classnames"
import React from "react"

import { Submission } from "../../../../types/types"
import { Accordion } from "../../../../ui/Accordion/Accordion"
import { IColumnType, Table } from "../../../../ui/Table/Table"
import { Arrow } from "../../../../ui/icons/Arrow"

import styles from "./ProblemVerdict.module.css"

const verdicts: Submission[] = [
  {
    timeFromStart: 10000000,
    verdict: "OK",
    score: 100,
    id: 1,
    compileLog: "Compile log",
    compiler: "gcc",
    diff: "diff",
    problemAlias: "problemAlias",
    problemId: "problemId",
    source: "source",
    submissionTime: "2021-05-05T12:00:00.000Z",
  },
]

const columns: IColumnType<Submission>[] = [
  {
    key: "time",
    title: "Время",
    width: 50,
    render: (_, { timeFromStart }) => <span className={styles.row}>{new Date(timeFromStart).toISOString().slice(11, 19)}</span>,
  },
  {
    key: "status",
    title: "Статус",
    width: 400,
    render: (_, { verdict }) => {
      const className = classNames({
        [styles.row]: true,
        [styles.verdictStatus]: true,
        [styles.verdictStatusOk]: verdict === "OK",
      })

      return <span className={className}>{verdict}</span>
    },
  },
  {
    key: "points",
    title: "Баллы",
    width: 40,
    render: (_, { verdict }) => <span className={styles.row}>{verdict === "OK" ? "1" : "0"}</span>,
  },
]
export const ProblemVerdict = ({
  solutionId,
  goBack,
  state,
}: {
  state: "entering" | "entered" | "exiting" | "exited" | "unmounted"
  solutionId: number
  goBack: (flag: boolean) => void
}) => {
  const verdicts: Submission[] = [
    {
      timeFromStart: 10000000,
      verdict: "OK",
      score: 100,
      id: 1,
      compileLog: "Compile log",
      compiler: "gcc",
      diff: "diff",
      problemAlias: "problemAlias",
      problemId: "problemId",
      source: "source",
      submissionTime: "2021-05-05T12:00:00.000Z",
    },
  ]
  const defaultStyle = {
    transition: `transform 500ms ease-in-out`,
    transform: `translateX(150%)`,
  }

  const transitionStyles = {
    entering: { transform: `translateX(0)` },
    entered: { transform: `translateX(0)` },
    exiting: { transform: `translateX(100%)` },
    exited: { transform: `translateX(150%)` },
    unmounted: { display: "none" },
  }
  return (
    <div
      style={{
        ...defaultStyle,
        ...transitionStyles[state],
      }}
      className={classNames(styles.problemSolutionDetails)}
    >
      <div className={styles.detailsHeader}>
        <Arrow
          className={styles.arrowBack}
          width={24}
          height={24}
          color={"var(--color-black-typo-primary)"}
          onClick={() => {
            goBack(false)
          }}
        />
        <h3 className={styles.title}>Детализация</h3>
      </div>
      <div className={styles.detailsContent}>
        <div className={styles.detailsTable}>
          <Table<Submission> data={verdicts} columns={columns} />
        </div>
        <div className={styles.detailsInfo}>
          <Accordion title={"Тесты: 2/3"}>
            <div className={styles.detailsTestsTable}>Test</div>
          </Accordion>
          <Accordion title={"Исходный код"}>
            <div className={styles.codeBlock}>Исходный код</div>
          </Accordion>
          <Accordion title={"Лог компиляции"}>
            <div className={styles.codeBlock}>Лог компиляции</div>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
