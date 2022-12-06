import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { useAppDispatch, useAppSelector } from '../../../hooks'

import { Button, Column } from '../..'

import { currentBoardSelector } from '../../../redux/board/selectors'

import {
  reorderTasksOnDragDrop,
  setCurrentBoardIndex
} from '../../../redux/board/actions'

import classes from './Board.module.scss'
import { setModalContent } from '../../../redux/modal/actions'
import { ModalContentTypes } from '../../Modal/defineModalEl'

export const Board: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // Getting current Board from Redux state
  const board = useAppSelector(currentBoardSelector())

  // Handler for click on 'return to Board list' button
  const onClickReturnToBoardListHandler = () => {
    navigate('/')
    dispatch(setCurrentBoardIndex(null))
  }

  // Handler for Drag and drop Tasks
  const onDragEndHandler = (result: DropResult) => {
    if (!result.destination) return
    dispatch(reorderTasksOnDragDrop(result))
  }

  return (
    <div className={classes.root}>
      {/* Button for return to Boards list */}
      <Button onClick={onClickReturnToBoardListHandler}>
        Back to Board List
      </Button>

      {/* Button for Create new Task */}
      <Button
        onClick={() =>
          dispatch(setModalContent(ModalContentTypes.FORM_CREATE_TASK))
        }
      >
        Create new Task
      </Button>

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
