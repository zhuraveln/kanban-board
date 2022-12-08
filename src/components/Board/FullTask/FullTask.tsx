import dayjs from 'dayjs'
import React from 'react'

import {
  Button,
  CommentCard,
  FormCreateComment,
  FormCreateSubTask,
  SubTaskCard
} from '../..'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getTaskSelector } from '../../../redux/board/selectors'
import {
  ModalContentTypes,
  setModalContent
} from '../../../redux/modal/actions'

import classes from './FullTask.module.scss'

export const FullTask: React.FC = () => {
  const dispatch = useAppDispatch()
  // Getting current Task from Redux state
  const task = useAppSelector(getTaskSelector())

  // State for visible input 'create new subtask, comments'
  const [visibleSubTaskInput, setVisibleSubTaskInput] = React.useState(false)
  const [visibleCommentInput, setVisibleCommentInput] = React.useState(false)

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
    setVisibleSubTaskInput(true)
  }

  // Handler for click 'add Comment' button
  const onClickAddComment = () => {
    setVisibleCommentInput(true)
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
      {task?.subtasks?.length && task.subtasks ? (
        <>
          <p>Subtasks:</p>
          {/* Button for create Subtask */}
          {!visibleSubTaskInput && (
            <Button onClick={onClickAddSubtask}>+Add subtask</Button>
          )}
          {visibleSubTaskInput && (
            <FormCreateSubTask setVisibleInput={setVisibleSubTaskInput} />
          )}
          <div>
            {task?.subtasks?.map((subtask, index) => (
              <SubTaskCard {...subtask} key={subtask.id} index={index} />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Render if Task hasn't Subtasks */}
          {/* Render button for create SubTask if input for create SubTask is hide */}
          {!visibleSubTaskInput && (
            <Button onClick={onClickAddSubtask}>+Add subtask</Button>
          )}
          {/* Render input for create SubTask */}
          {visibleSubTaskInput && (
            <FormCreateSubTask setVisibleInput={setVisibleSubTaskInput} />
          )}
        </>
      )}

      {/* COMMENTS CARDS */}
      {/* Render if Task has Comments */}
      {task?.comments?.length && task.comments ? (
        <>
          <p>Comments:</p>
          {/* Button for create Comments */}
          {!visibleCommentInput && (
            <Button onClick={onClickAddComment}>+Add comment</Button>
          )}
          {visibleCommentInput && (
            <FormCreateComment setVisibleInput={setVisibleCommentInput} />
          )}
          <div>
            {task.comments.map(comment => (
              <CommentCard {...comment} key={comment.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Render if Task hasn't Comments */}
          {/* Render button for create Comments if input for create Comments is hide */}
          {!visibleCommentInput && (
            <Button onClick={onClickAddComment}>+Add comment</Button>
          )}
          {/* Render input for create Comments */}
          {visibleCommentInput && (
            <FormCreateComment setVisibleInput={setVisibleCommentInput} />
          )}
        </>
      )}
    </>
  )
}
