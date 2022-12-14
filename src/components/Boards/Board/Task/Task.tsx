import React from 'react'

import {
  Button,
  CommentsList,
  FormCreateComment,
  FormCreateSubTask,
  SubTaskCard
} from '../../..'
import {
  changeTaskIcon,
  createdAtIcon,
  deleteIcon,
  priorityIcon
} from '../../../../assets'

import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { deleteTask } from '../../../../redux/board/actions'
import { getTaskSelector } from '../../../../redux/board/selectors'
import { closeModal, setModalContent } from '../../../../redux/modal/actions'
import { calcTimeInWork, dateFormat, sortByParentId } from '../../../../utils'

import { ModalContentTypes } from '../../../Modal/defineModalEl'

import classes from './Task.module.scss'

export const Task: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting current Task from Redux state
  const task = useAppSelector(getTaskSelector())

  // State for visible input 'create new subtask, comments'
  const [visibleSubTaskInput, setVisibleSubTaskInput] = React.useState(false)
  const [visibleCommentInput, setVisibleCommentInput] = React.useState(false)

  // Getting a sorted object with comments by parentId
  const sortedComments = sortByParentId(task?.comments)

  /** Return replies comments by parentId */
  const getReplies = (parentId: string) => {
    return sortedComments[parentId]
  }

  // Calculation time in work
  const timeInWork = calcTimeInWork(task?.createdAt)

  // Handler for click 'delete Task' button
  const onClickDeleteTask = () => {
    if (window.confirm('Are you sure to delete this Task?')) {
      dispatch(closeModal())
      setTimeout(() => dispatch(deleteTask()), 650)
    }
  }

  return (
    <>
      <div className={classes.root}>
        {/* HEADER */}
        <div className={classes.header}>
          <div className={classes.info}>
            {/* Task title */}
            <h2 className={classes.title}>{task?.title}</h2>

            {/* Task priority */}
            <h2 className={classes.priority}>
              <img src={priorityIcon} alt='priorityIcon' />
              {task?.priority}
            </h2>

            {/* Task Date Creation */}
            <div className={classes.createdAt}>
              <img src={createdAtIcon} alt='createdAtIcon' />
              {dateFormat(task?.createdAt)}
            </div>
          </div>

          {/* Buttons for update and delete Task */}
          <div style={{ display: 'flex', gap: '3px' }}>
            {/* Update */}
            <Button
              onClick={() =>
                dispatch(setModalContent(ModalContentTypes.FORM_UPDATE_TASK))
              } // open modal window with form for update task
            >
              <img src={changeTaskIcon} alt='changeTask' />
              Change
            </Button>

            {/* Delete */}
            <Button
              onClick={onClickDeleteTask}
              style={{ backgroundColor: 'rgb(232, 106, 106)' }}
            >
              <img src={deleteIcon} alt='deleteIcon' />
            </Button>
          </div>
        </div>

        {/* BODY */}
        <div className={classes.body}>
          {/* Left side */}
          <div className={classes.left}>
            {/* Task description */}
            <div className={classes.description}>
              <p className={classes.title}>Description:</p>
              <div className={classes.body}>{task?.description}</div>
            </div>

            {/* Attached file */}
            {task?.file && (
              <div>
                <a href={String(task?.file)} target='_blank' rel='noreferrer'>
                  Attached file
                </a>
              </div>
            )}

            {/* Target date for Task */}
            {task?.finishBy && (
              <div className={classes.createdAt}>
                <p className={classes.title}>Finish Before:</p>{' '}
                {dateFormat(task?.finishBy)}
              </div>
            )}

            {/* Time in work */}
            <div className={classes.createdAt}>
              <p className={classes.title}>In work:</p> {timeInWork}
            </div>

            {/* SUBTASK CARDS */}
            {/* Render if Task has Subtasks */}
            {task?.subtasks?.length && task?.subtasks ? (
              <>
                <div className={classes.input}>
                  <p className={classes.title}>Subtasks</p>{' '}
                  {/* Button for create Subtask */}
                  {!visibleSubTaskInput && (
                    <Button
                      onClick={() => setVisibleSubTaskInput(prev => !prev)}
                      style={{ padding: '5px 10px' }}
                    >
                      +
                    </Button>
                  )}
                </div>

                {visibleSubTaskInput && (
                  <FormCreateSubTask setVisibleInput={setVisibleSubTaskInput} />
                )}
                <div className={classes.subtasks}>
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
                  <Button onClick={() => setVisibleSubTaskInput(prev => !prev)}>
                    +Add subtask
                  </Button>
                )}
                {/* Render input for create SubTask */}
                {visibleSubTaskInput && (
                  <FormCreateSubTask setVisibleInput={setVisibleSubTaskInput} />
                )}
              </>
            )}
          </div>

          <div className={classes.right}>
            {/* COMMENTS CARDS */}
            {/* Render if Task has Comments */}
            {task?.comments?.length && task?.comments ? (
              <>
                <div className={classes.input}>
                  <p className={classes.title}>Comments</p>
                  {/* Button for create Comments */}
                  {!visibleCommentInput && (
                    <Button
                      onClick={() => setVisibleCommentInput(prev => !prev)}
                      style={{ padding: '5px 10px' }}
                    >
                      +
                    </Button>
                  )}
                </div>
                {visibleCommentInput && (
                  <FormCreateComment
                    parentId={null}
                    setVisibleInput={setVisibleCommentInput}
                  />
                )}
                <div className={classes.comments}>
                  <CommentsList
                    comments={sortedComments[String(null)]}
                    getReplies={getReplies}
                  />
                </div>
              </>
            ) : (
              <>
                {/* Render if Task hasn't Comments */}
                {/* Render button for create Comments if input for create Comments is hide */}
                {!visibleCommentInput && (
                  <Button onClick={() => setVisibleCommentInput(prev => !prev)}>
                    +Add comment
                  </Button>
                )}
                {/* Render input for create Comments */}
                {visibleCommentInput && (
                  <FormCreateComment
                    parentId={null}
                    setVisibleInput={setVisibleCommentInput}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
