import React from 'react'
import { CommentsList, FormCreateComment } from '../../../..'

import { ICommentProps } from './types'
import { Button } from '../../../../UI/Button/Button'

import classes from './CommentCard.module.scss'

export const CommentCard: React.FC<ICommentProps> = props => {
  const { body, id, getReplies } = props // get values from props

  const [visibleCommentInput, setVisibleCommentInput] = React.useState(false)

  const replies = getReplies(id)

  return (
    <div className={classes.root}>
      <div className={classes.title}>{body}</div>
      <Button onClick={() => setVisibleCommentInput(prev => !prev)}>
        Reply
      </Button>
      {visibleCommentInput && (
        <FormCreateComment
          parentId={id}
          setVisibleInput={setVisibleCommentInput}
        />
      )}
      {replies && (
        <div className={classes.replies}>
          <CommentsList comments={replies} getReplies={getReplies} />
        </div>
      )}
    </div>
  )
}
