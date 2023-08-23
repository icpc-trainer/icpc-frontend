import React, { FC } from 'react'

import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'
import { CommentContainer } from '@widgets/ProblemSpaceComments/components/Comment/CommentContainer'

import { IComment } from '../../../../types/types'

import styles from './CommentList.module.css'

interface MessageListProps {
  comments: IComment[]
}

export const CommentList: FC<MessageListProps> = ({ comments }) => {
  const getCommentKey: GetItemKeyFunction<IComment> = comment => comment.id
  const renderComment: RenderItemFunction<IComment> = comment => <CommentContainer comment={comment} />

  return (
    <List<IComment>
      data={comments}
      getItemKey={getCommentKey}
      renderItem={renderComment}
      listClassName={styles.commentList}
    />
  )
}
