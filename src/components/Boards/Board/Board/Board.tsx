import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { setModalContent } from '../../../../redux/modal/actions'
import { currentBoardSelector } from '../../../../redux/board/selectors'

import { Button, Column } from '../../..'

import {
  reorderTasksOnDragDrop,
  setCurrentBoardIndex
} from '../../../../redux/board/actions'

import { ModalContentTypes } from '../../../Modal/defineModalEl'

import { changeTaskIcon, createTaskIcon, returnIcon } from '../../../../assets'
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

  // Handler for Drag and drop Tasks
  const onDragEndHandler = (result: DropResult) => {
    if (!result.destination) return
    dispatch(reorderTasksOnDragDrop(result))
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {/* Button for return to Boards list */}
        <Button onClick={onClickReturnToBoardList} style={{ opacity: '0.6' }}>
          <img src={returnIcon} alt='return' />
          Boards List
        </Button>

        {/* Board name */}
        <div className={classes.boardName}>
          <h2>{board.name}</h2>

          {/* Button for update Board, open modal window */}
          <Button
            onClick={() =>
              dispatch(setModalContent(ModalContentTypes.FORM_UPDATE_BOARD))
            }
          >
            <img src={changeTaskIcon} alt='changeTask' />
          </Button>
        </div>

        {/* Button for create new Task, open modal window */}
        <Button
          onClick={() =>
            dispatch(setModalContent(ModalContentTypes.FORM_CREATE_TASK))
          }
        >
          <img src={createTaskIcon} alt='createTask' />
          Create new Task
        </Button>
      </div>

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
