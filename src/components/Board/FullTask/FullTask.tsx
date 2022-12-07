import dayjs from 'dayjs'
import React from 'react'

import { Button, SubTaskCard } from '../..'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getTaskSelector } from '../../../redux/board/selectors'
import {
  ModalContentTypes,
  setModalContent
} from '../../../redux/modal/actions'
import { FormCreateSubTask } from '../../Forms/FormCreateSubTask/FormCreateSubTask'

import classes from './FullTask.module.scss'

export const FullTask: React.FC = () => {
  const dispatch = useAppDispatch()
  // Getting current Task from Redux state
  const task = useAppSelector(getTaskSelector())

  // State for visible input 'create new subtask'
  const [visibleInput, setVisibleInput] = React.useState(false)

  // Calculation days and hours in work
  const daysInWork = dayjs().diff(task?.dateCreation, 'day')
  const hoursInWork = dayjs().diff(task?.dateCreation, 'hour')
  const timeInWork = `${daysInWork} d ${hoursInWork - daysInWork * 24} h`

  // Handler for click 'update Task' button
  const onClickUpdateTask = () => {
    dispatch(setModalContent(ModalContentTypes.FORM_UPDATE_TASK))
  }

  // Handler for click 'add Subtask' button
  const onClickAddSubtask = () => {
    setVisibleInput(true)
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
      {/* Target date for Task */}
      {task?.targetDate && (
        <div>
          Target Date: {dayjs(task?.targetDate).format('DD.MM.YYYY H:mm')}
        </div>
      )}
      {/* Time in work */}
      <div>In work: {timeInWork}</div>

      {/* SUBTASK CARDS */}
      {/* Render if Task has Subtasks */}
      {task?.subtasks ? (
        <>
          <p>Subtasks:</p>
          {/* Button for create Subtask */}
          {!visibleInput && (
            <Button onClick={onClickAddSubtask}>+Add subtask</Button>
          )}
          {visibleInput && (
            <FormCreateSubTask setVisibleInput={setVisibleInput} />
          )}
          <div>
            {task?.subtasks?.map(task => (
              <SubTaskCard {...task} key={task.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Render if Task hasn't Subtasks */}
          {/* Render button for create SubTask if input for create SubTask is hide */}
          {!visibleInput && (
            <Button onClick={onClickAddSubtask}>+Add subtask</Button>
          )}
          {/* Render input for create SubTask */}
          {visibleInput && (
            <FormCreateSubTask setVisibleInput={setVisibleInput} />
          )}
        </>
      )}
    </>
  )
}
