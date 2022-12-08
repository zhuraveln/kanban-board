import React from 'react'

import { TextField } from '../../UI/InputTextField/TextField'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { changeSubTaskStatus } from '../../../redux/board/actions'
import { getSubTaskSelector } from '../../../redux/board/selectors'

import { ISubTaskCardProps } from './types'

import classes from './SubTaskCard.module.scss'

export const SubTaskCard: React.FC<ISubTaskCardProps> = props => {
  const dispatch = useAppDispatch()

  const { index } = props // subtask index from props

  // Getting current SubTask values from Redux state
  const { title, isComplete } = useAppSelector(getSubTaskSelector(index))

  // Handler for click on Subtask card
  const onClickHandler = () => {
    dispatch(changeSubTaskStatus({ isComplete: !isComplete, index })) // change subtask status
  }

  return (
    <div className={classes.root} onClick={onClickHandler}>
      <TextField
        type={'checkbox'}
        className={classes.checkbox}
        checked={isComplete}
        onChange={onClickHandler}
      />
      <div className={classes.title}>{title}</div>
    </div>
  )
}
