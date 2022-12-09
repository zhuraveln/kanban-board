import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { useAppDispatch, useAppSelector } from '../../../../hooks'
import {
  ModalContentTypes,
  setModalContent
} from '../../../../redux/modal/actions'
import { currentBoardSelector } from '../../../../redux/board/selectors'

import { Button, Column } from '../../..'

import {
  reorderTasksOnDragDrop,
  setCurrentBoardIndex
} from '../../../../redux/board/actions'

import classes from './Board.module.scss'

export const Board: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // Getting current Board from Redux state
  const board = useAppSelector(currentBoardSelector())

  // Handler for click on 'return to Board list' button
  const onClickReturnToBoardList = () => {
    navigate('/')
    dispatch(setCurrentBoardIndex(null))
  }

  // Handler for click 'create new Task' button
  const onClickCreateNewTask = () => {
    dispatch(setModalContent(ModalContentTypes.FORM_CREATE_TASK))
  }

  // Handler for Drag and drop Tasks
  const onDragEndHandler = (result: DropResult) => {
    if (!result.destination) return
    dispatch(reorderTasksOnDragDrop(result))
  }

  return (
    <div className={classes.root}>
      {/* Button for return to Boards list */}
      <Button onClick={onClickReturnToBoardList}>Back to Board List</Button>

      {/* Button for create new Task, open modal window */}
      <Button onClick={onClickCreateNewTask}>Create new Task</Button>

      {/* Board's columns */}
      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className={classes.columns}>
          {board?.columns?.map((column, index) => (
            <Column {...column} index={index} key={column.id} />
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}
