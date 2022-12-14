import React from 'react'
import { CommentItem } from '../../../../Forms/FormCreateBoard/types'
import { CommentCard } from '../CommentCard/CommentCard'

import classes from './CommentsList.module.scss'

interface ICommentsList {
  comments: CommentItem[]
  getReplies: (parentId: string) => CommentItem[]
}

export const CommentsList: React.FC<ICommentsList> = props => {
  const { comments, getReplies } = props // get values from props

  return (
    <div className={classes.root}>
      {/* Comments List */}
      {comments?.map(comment => (
        <CommentCard {...comment} getReplies={getReplies} key={comment.id} />
      ))}
    </div>
  )
}
