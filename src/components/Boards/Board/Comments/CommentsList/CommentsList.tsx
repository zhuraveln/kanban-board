import React from 'react'
import { CommentItem } from '../../../../Forms/FormCreateBoard/types'
import { CommentCard } from '../CommentCard/CommentCard'

import classes from './CommentsList.module.scss'
import { ICommentsListProps } from './types'

export const CommentsList: React.FC<ICommentsListProps> = props => {
  const { comments, getReplies } = props // get values from props

  return (
    <div className={classes.root}>
      {/* Comments List */}
      {comments.map(comment => (
        <CommentCard {...comment} getReplies={getReplies} key={comment.id} />
      ))}
    </div>
  )
}
