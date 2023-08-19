import React, { FC, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import { ISubmission } from 'src/types/types'

import { SubmissionDetails } from '../SubmissionDetails/SubmissionDetails'
import { SubmissionTable } from '../SubmissionTable/SubmissionTable'

import styles from './Submissions.module.css'

export interface ProblemVerdictsProps {
  submissions: ISubmission[]
}

export const Submissions: FC<ProblemVerdictsProps> = ({ submissions }) => {
  const [submissionId, setSubmissionId] = useState(null)
  const [isDetailsOpen, setDetailsOpen] = useState(false)

  const onOpenDetails = (id: number) => {
    setSubmissionId(id)
    setDetailsOpen(true)
  }

  const onCloseDetails = () => {
    setDetailsOpen(false)
  }

  const nodeRef = useRef(null)

  return (
    <div className={styles.ProblemVerdicts}>
      <div className={styles.ProblemVerdictsTable}>
        <SubmissionTable submissions={submissions} onOpenDetails={onOpenDetails} />
      </div>
      <Transition nodeRef={nodeRef} in={isDetailsOpen} timeout={100}>
        {state => <SubmissionDetails state={state} submissionId={submissionId} onCloseDetails={onCloseDetails} />}
      </Transition>
    </div>
  )
}
