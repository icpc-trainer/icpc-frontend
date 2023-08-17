import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { SubmissionRetrievedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { ISubmission } from 'src/types/types'

import { Submissions } from './Submissions'

export const SubmissionsContainer: FC = () => {
  const { alias } = useParams()

  const [submissions, setSubmissions] = useState<ISubmission[]>([])

  const submissionRetrievedEventHandler: SubmissionRetrievedHandler = newSubmission => {
    setSubmissions(prev => {
      const currSubmission = prev.find(({ id }) => id === newSubmission.id)

      if (!currSubmission) {
        return [newSubmission, ...prev]
      } else {
        return prev.map(submission => (submission.id === newSubmission.id ? newSubmission : submission))
      }
    })
  }

  useEffect(() => {
    api
      .getSubmissionsByAlias(trainingSessionId, alias)
      .then(({ submissions }) => setSubmissions(submissions.sort((a, b) => b.timeFromStart - a.timeFromStart)))
      .catch(console.log)

    return workSpaceSocket.subscribeSubmissionRetrieved(submissionRetrievedEventHandler)
  }, [alias])

  return <Submissions submissions={submissions} />
}
