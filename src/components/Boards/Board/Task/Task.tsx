import React from 'react'

import {
  Button,
  CommentsList,
  FormCreateComment,
  FormCreateSubTask,
  SubTaskCard
} from '../../..'

import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getTaskSelector } from '../../../../redux/board/selectors'
import { setModalContent } from '../../../../redux/modal/actions'
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
  const sortedComments = React.useMemo(() => {
    return sortByParentId(task.comments)
  }, [task.comments])

  /** Return replies comments by parentId */
  const getReplies = (parentId: string) => {
    return sortedComments[parentId]
  }

  // Calculation time in work
  const timeInWork = calcTimeInWork(task.createdAt)

  // Handler for click 'add Subtask' button
  const onClickAddSubtask = () => {
    setVisibleSubTaskInput(prev => !prev)
  }

  // Handler for click 'add Comment' button
  const onClickAddComment = () => {
    setVisibleCommentInput(prev => !prev)
  }

  return (
    <>
      <div className={classes.root}>
        {/* Header */}
        <div className={classes.header}>
          <div className={classes.titlePriority}>
            {/* Task title */}
            <h2 className={classes.title}>{task.title}</h2>

            {/* Task priority */}
            <h2 className={classes.priority}>{task.priority}</h2>
          </div>

          {/* Button for update Task */}
          <Button
            onClick={() =>
              dispatch(setModalContent(ModalContentTypes.FORM_UPDATE_TASK))
            } // open modal window with form for update task
          >
            Update Task
          </Button>
        </div>

        {/* Body */}
        <div className={classes.body}>
          {/* Left side */}
          <div className={classes.left}>
            {/* Task description */}
            <div className={classes.description}>
              <p className={classes.title}>Description:</p>
              <div className={classes.body}>{task.description}</div>
            </div>

            {/* Attached file */}
            {task.file && (
              <div>
                <a href={String(task.file)} target='_blank' rel='noreferrer'>
                  Attached file
                </a>
              </div>
            )}

            {/* Task Date Creation */}
            <div className={classes.createdAt}>
              <p className={classes.title}>Date Creation:</p>
              {dateFormat(task.createdAt)}
            </div>

            {/* Target date for Task */}
            {task.finishBy && (
              <div className={classes.createdAt}>
                <p className={classes.title}>Finish Before:</p>{' '}
                {dateFormat(task.finishBy)}
              </div>
            )}

            {/* Time in work */}
            <div className={classes.createdAt}>
              <p className={classes.title}>In work:</p> {timeInWork}
            </div>

            {/* SUBTASK CARDS */}
            {/* Render if Task has Subtasks */}
            {task.subtasks?.length && task.subtasks ? (
              <>
                <div className={classes.input}>
                  <p className={classes.title}>Subtasks</p>{' '}
                  {/* Button for create Subtask */}
                  {!visibleSubTaskInput && (
                    <Button
                      onClick={onClickAddSubtask}
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
                  {task.subtasks?.map((subtask, index) => (
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
          </div>

          <div className={classes.right}>
            {/* COMMENTS CARDS */}
            {/* Render if Task has Comments */}
            {task.comments?.length && task.comments ? (
              <>
                <div className={classes.input}>
                  <p className={classes.title}>Comments</p>
                  {/* Button for create Comments */}
                  {!visibleCommentInput && (
                    <Button
                      onClick={onClickAddComment}
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
                <div>
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
                  <Button onClick={onClickAddComment}>+Add comment</Button>
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
