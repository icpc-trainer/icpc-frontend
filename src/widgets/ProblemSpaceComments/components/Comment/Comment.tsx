import React, { FC } from 'react'

import { IComment } from 'src/types/types'

import styles from './Comment.module.css'

interface CommentProps {
  comment: IComment
  onDelete: () => void
}

export const Comment: FC<CommentProps> = ({ comment, onDelete }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.commentText}>
        <span className={styles.commentText}>{`${comment.userFirstName}: ${comment.content}`}</span>
      </div>
      <button className={styles.commentDeleteButton} onClick={onDelete} />
    </div>
  )
}
