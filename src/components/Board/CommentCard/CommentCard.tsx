import React from 'react'

import { useAppDispatch } from '../../../hooks'
import { CommentItem } from '../../Forms/FormCreateBoard/types'

import classes from './CommentCard.module.scss'

export const CommentCard: React.FC<CommentItem> = props => {
  const dispatch = useAppDispatch()

  const { title } = props // get values from props

  // Handler for click on Subtask card
  const onClickHandler = () => {
    // dispatch(changeSubTaskStatus({ isComplete: !isComplete, index })) // change subtask status
  }

  return (
    <div className={classes.root} onClick={onClickHandler}>
      <div className={classes.title}>{title}</div>
    </div>
  )
}
