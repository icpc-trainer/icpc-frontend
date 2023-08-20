import React from 'react'
import { useParams } from 'react-router'

import { ProblemCommentDeletedHandler, ProblemCommentReceivedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { CommentList } from '@widgets/ProblemSpaceComments/components/CommentList/CommentList'

import { IComment } from '../../../../types/types'

export const CommentListContainer = () => {
  const { trainingSessionId, alias } = useParams()

  const [comments, setComments] = React.useState<IComment[]>([])

  const problemCommentReceivedEventHandler: ProblemCommentReceivedHandler = comment => {
    if (comment.problemAlias === alias) {
      setComments(prevState => [...prevState, comment])
    }
  }

  const problemCommentDeletedEventHandler: ProblemCommentDeletedHandler = ({ commentId }) => {
    setComments(prev => prev.filter(comment => comment.id !== commentId))
  }

  React.useEffect(() => {
    api.getCommentsByAlias(trainingSessionId, alias).then(setComments).catch(console.log)

    const problemCommentReceivedUnsubscribe = workSpaceSocket.subscribeProblemCommentReceived(
      problemCommentReceivedEventHandler,
    )
    const problemCommentDeletedUnsubscribe = workSpaceSocket.subscribeProblemCommentDeleted(
      problemCommentDeletedEventHandler,
    )

    return () => {
      problemCommentReceivedUnsubscribe()
      problemCommentDeletedUnsubscribe()
    }
  }, [alias])

  return <CommentList comments={comments} />
}
