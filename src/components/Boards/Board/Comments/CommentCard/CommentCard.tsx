import React from 'react'
import { CommentsList, FormCreateComment } from '../../../..'
import { avatarIcon } from '../../../../../assets'
import { dateFormat } from '../../../../../utils'

import { CommentItem } from '../../../../Forms/FormCreateBoard/types'
import { Button } from '../../../../UI/Button/Button'

import classes from './CommentCard.module.scss'

interface IComment extends CommentItem {
  getReplies: (parentId: string) => CommentItem[]
}

export const CommentCard: React.FC<IComment> = props => {
  const { id, body, createdAt, getReplies } = props // get values from props

  const [visibleCommentInput, setVisibleCommentInput] = React.useState(false)

  const replies = getReplies(id)

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src={avatarIcon} className={classes.avatar} alt='Avatar'></img>
        <div className={classes.user}>Surprised avocado</div>
        <div className={classes.createdAt}>{dateFormat(createdAt)}</div>
      </div>
      <div className={classes.body}>{body}</div>
      <div className={classes.footer}>
        <Button
          onClick={() => setVisibleCommentInput(prev => !prev)}
          style={{ padding: '5px 5px', textTransform: 'none' }}
        >
          Reply
        </Button>
      </div>
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
