import dayjs from 'dayjs'
import React from 'react'

import { Button, SubTaskCard } from '../..'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { currentTaskSelector } from '../../../redux/board/selectors'
import {
  ModalContentTypes,
  setModalContent
} from '../../../redux/modal/actions'

import classes from './FullTask.module.scss'

export const FullTask: React.FC = () => {
  const dispatch = useAppDispatch()
  // Getting current Task from Redux state
  const task = useAppSelector(currentTaskSelector())

  // Calculation days and hours in work
  const daysInWork = dayjs().diff(task?.dateCreation, 'day')
  const hoursInWork = dayjs().diff(task?.dateCreation, 'hour')
  const timeInWork = `${daysInWork} d ${hoursInWork - daysInWork * 24} h`

  // Handler for click 'update Task' button
  const onClickUpdateTask = () => {
    dispatch(setModalContent(ModalContentTypes.FORM_UPDATE_TASK))
  }

  return (
    <>
      <div className={classes.root}></div>

      {/* Button for update Task */}
      <Button onClick={onClickUpdateTask}>Update task</Button>
      <div className={classes.description}>{task?.description}</div>
      <div>
        Date Creation: {dayjs(task?.dateCreation).format('DD.MM.YYYY H:mm')}
      </div>
      <div>
        Target Date: {dayjs(task?.targetDate).format('DD.MM.YYYY H:mm')}
      </div>
      <div>In work: {timeInWork}</div>

      {/* Subtask Cards */}
      {task?.subtasks?.map(task => (
        <SubTaskCard {...task} key={task.id} />
      ))}
    </>
  )
}
