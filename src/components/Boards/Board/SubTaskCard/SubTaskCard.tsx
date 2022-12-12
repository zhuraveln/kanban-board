import React from 'react'

import { TextField } from '../../../UI/InputTextField/TextField'

import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { changeSubTaskStatus } from '../../../../redux/board/actions'
import { getSubTaskSelector } from '../../../../redux/board/selectors'

import { SubTaskItem } from '../../../Forms/FormCreateBoard/types'

import classes from './SubTaskCard.module.scss'

interface ISubTaskCard extends SubTaskItem {
  index: number // index of SubTask in array for update status functional in Redux
}

export const SubTaskCard: React.FC<ISubTaskCard> = props => {
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
        style={{ padding: '25px' }}
        checked={isComplete}
        onChange={onClickHandler}
      />
      <div className={isComplete ? classes.complete : ''}>{title}</div>
    </div>
  )
}
