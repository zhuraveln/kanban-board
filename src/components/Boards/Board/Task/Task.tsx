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
            {task?.description && (
              <div className={classes.description}>
                <p className={classes.title}>Description:</p>
                <div className={classes.body}>{task?.description}</div>
              </div>
            )}

            {/* Attached file */}
            {task?.file && (
              <div>
                <a href={String(task?.file)} target='_blank' rel='noreferrer'>
                  Attached file
                </a>
              </div>
            )}

            {/* Finish before date for Task */}
            {task?.finishBy && (
              <div className={classes.finishBy}>
                <p className={classes.title}>Finish Before:</p>
                <p className={classes.date}>{dateFormat(task?.finishBy)}</p>
              </div>
            )}

            {/* Time in work */}
            <div className={classes.finishBy} style={{ marginBottom: '10px ' }}>
              <p className={classes.title}>In work:</p>
              <p className={classes.date}>{timeInWork}</p>
            </div>

            {/* SUBTASKS */}
            <div className={classes.subTaskInput}>
              {/* Title */}
              <p className={classes.title}>Subtasks:</p>

              {/* Button for create Subtask */}
              {!visibleSubTaskInput && (
                <Button
                  onClick={() => setVisibleSubTaskInput(prev => !prev)}
                  style={{ padding: '5px 10px' }}
                >
                  +
                </Button>
              )}

              {/* Input for create Subtask */}
              {visibleSubTaskInput && (
                <FormCreateSubTask setVisibleInput={setVisibleSubTaskInput} />
              )}
            </div>

            {/* Subtasks cards */}
            {task?.subtasks?.length > 0 && (
              <div className={classes.subtasks}>
                {task.subtasks.map((subtask, index) => (
                  <SubTaskCard {...subtask} key={subtask.id} index={index} />
                ))}
              </div>
            )}
          </div>

          <div className={classes.right}>
            {/* COMMENTS */}
            <div className={classes.commentInput}>
              {/* Title */}
              <p className={classes.title}>Comments:</p>

              {/* Button for create Subtask */}
              {!visibleCommentInput && (
                <Button
                  onClick={() => setVisibleCommentInput(prev => !prev)}
                  style={{ padding: '5px 10px' }}
                >
                  +
                </Button>
              )}

              {/* Input for create Comment */}
              {visibleCommentInput && (
                <FormCreateComment
                  parentId={null}
                  setVisibleInput={setVisibleCommentInput}
                />
              )}
            </div>

            {/* Comments cards */}
            {task?.comments?.length > 0 && (
              <div className={classes.comments}>
                <CommentsList
                  comments={sortedComments[String(null)]}
                  getReplies={getReplies}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
