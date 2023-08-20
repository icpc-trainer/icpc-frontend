import React, { FC } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { Comment } from '@widgets/ProblemSpaceComments/components/Comment/Comment'

import { IComment } from '../../../../types/types'

interface CommentContainerProps {
  comment: IComment
}

export const CommentContainer: FC<CommentContainerProps> = ({ comment }) => {
  const { trainingSessionId } = useParams()

  const onDelete = () => {
    api.removeCommentById(trainingSessionId, comment.id).then(console.log).catch(console.log)
  }

  return <Comment comment={comment} onDelete={onDelete} />
}
