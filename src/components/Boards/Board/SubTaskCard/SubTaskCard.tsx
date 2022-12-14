import React from 'react'

import { TextField } from '../../../UI/InputTextField/TextField'

import { useAppDispatch, useAppSelector } from '../../../../hooks'
import {
  changeSubTaskStatus,
  deleteSubTask
} from '../../../../redux/board/actions'
import { getSubTaskSelector } from '../../../../redux/board/selectors'

import { SubTaskItem } from '../../../Forms/FormCreateBoard/types'

import classes from './SubTaskCard.module.scss'
import { dateFormat } from '../../../../utils'
import { closeModal } from '../../../../redux/modal/actions'
import { Button } from '../../../UI/Button/Button'
import { deleteIcon } from '../../../../assets'

interface ISubTaskCard extends SubTaskItem {
  index: number // index of SubTask in array for update status functional in Redux
}

export const SubTaskCard: React.FC<ISubTaskCard> = props => {
  const dispatch = useAppDispatch()

  const { index } = props // subtask index from props

  // Getting current SubTask values from Redux state
  const { title, createdAt, isComplete } = useAppSelector(
    getSubTaskSelector(index)
  )

  // Handler for click on Subtask card
  const onClickHandler = () => {
    dispatch(changeSubTaskStatus({ isComplete: !isComplete, index })) // change subtask status
  }

  // Handler for click 'delete SubTask' button
  const onClickDeleteSubTask = () => {
    if (window.confirm('Are you sure to delete this Subtask?')) {
      // dispatch(closeModal())
      setTimeout(() => dispatch(deleteSubTask(index)), 650)
    }
  }

  return (
    <div className={classes.root} onClick={onClickHandler}>
      {/* Checkbox and title for Subtask */}
      <div className={classes.body}>
        <TextField
          type={'checkbox'}
          className={classes.checkbox}
          style={{ padding: '25px' }}
          checked={isComplete}
          onChange={onClickHandler}
        />
        <div className={isComplete ? classes.complete : ''}>{title}</div>
      </div>

      {/* Subtask created date and delete button*/}
      <div className={classes.footer}>
        <div className={classes.createdAt}>{dateFormat(createdAt)}</div>
        {/* Delete button*/}
        <Button
          onClick={onClickDeleteSubTask}
          style={{ backgroundColor: 'rgb(232, 106, 106)' }}
        >
          <img src={deleteIcon} alt='deleteIcon' />
        </Button>
      </div>
    </div>
  )
}
