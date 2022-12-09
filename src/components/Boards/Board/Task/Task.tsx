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
import {
  ModalContentTypes,
  setModalContent
} from '../../../../redux/modal/actions'
import { calcTimeInWork, dateFormat, sortByParentId } from '../../../../utils'

import classes from './Task.module.scss'

export const Task: React.FC = () => {
  const dispatch = useAppDispatch()
  // Getting current Task from Redux state
  const { comments, createdAt, description, targetDate, subtasks } =
    useAppSelector(getTaskSelector())

  // State for visible input 'create new subtask, comments'
  const [visibleSubTaskInput, setVisibleSubTaskInput] = React.useState(false)
  const [visibleCommentInput, setVisibleCommentInput] = React.useState(false)

  // Getting a sorted object with comments by parentId
  const sortedComments = React.useMemo(() => {
    return sortByParentId(comments)
  }, [comments])

  /** Return replies comments by parentId */
  const getReplies = (parentId: string) => {
    return sortedComments[parentId]
  }

  // Calculation time in work
  const timeInWork = calcTimeInWork(createdAt)

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
      <div className={classes.root}></div>

      {/* Button for update Task */}
      <Button
        onClick={() =>
          dispatch(setModalContent(ModalContentTypes.FORM_UPDATE_TASK))
        } // open modal window with form for update task
      >
        Update Task
      </Button>

      <div className={classes.description}>{description}</div>
      <div>Date Creation: {dateFormat(createdAt)}</div>
      {/* Target date for Task */}
      {targetDate && <div>Target Date: {dateFormat(targetDate)}</div>}
      {/* Time in work */}
      <div>In work: {timeInWork}</div>

      {/* SUBTASK CARDS */}
      {/* Render if Task has Subtasks */}
      {subtasks?.length && subtasks ? (
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
            {subtasks?.map((subtask, index) => (
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
      {comments?.length && comments ? (
        <>
          <p>Comments:</p>
          {/* Button for create Comments */}
          {!visibleCommentInput && (
            <Button onClick={onClickAddComment}>+Add comment</Button>
          )}
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
    </>
  )
}
