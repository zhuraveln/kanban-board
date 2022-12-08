import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { changeSubTaskStatus } from '../../../redux/board/actions'
import { getSubTaskSelector } from '../../../redux/board/selectors'
import { TextField } from '../../UI/InputTextField/TextField'

import classes from './SubTaskCard.module.scss'
import { ISubTaskCardProps } from './types'

export const SubTaskCard: React.FC<ISubTaskCardProps> = props => {
  const dispatch = useAppDispatch()

  const { index } = props // subtask index from props

  // Getting current SubTask from Redux state
  const { title, isComplete } = useAppSelector(getSubTaskSelector(index))

  const onClickHandler = () => {
    dispatch(changeSubTaskStatus({ isComplete, index }))
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
