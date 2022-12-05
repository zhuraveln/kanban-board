import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { Column } from '../Column/Column'
import { FormCreateTask } from '../../Forms/FormCreateTask/FormCreateTask'
import { Modal } from '../../Modal/Modal'
import { Button } from '../../UI/Button/Button'

import { useSelector } from 'react-redux'
import { boardSelector } from '../../../redux/selectors'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import {
  reorderTasksOnDragDrop,
  setcurrentBoardIndex
} from '../../../redux/actions'

import classes from './Board.module.scss'

export const Board: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // Getting current Board from Redux state
  const board = useSelector(boardSelector())

  // State for Modal window
  const [modalActive, setModalActive] = React.useState(false)

  // Handler for click on 'return to Board list' button
  const onClickReturnToBoardListHandler = () => {
    navigate('/')
    dispatch(setcurrentBoardIndex(null))
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
      <Button onClick={() => setModalActive(true)}>Create new Task</Button>

      {/* Board's columns */}
      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className={classes.columns}>
          {board?.columns?.map((column, index) => (
            <Column {...column} index={index} key={column.id} />
          ))}
        </div>
      </DragDropContext>

      {/* Modal window for create new Task*/}
      <Modal
        title={'Create task'}
        active={modalActive}
        setActive={setModalActive}
      >
        <FormCreateTask setModalActive={setModalActive} />
      </Modal>
    </div>
  )
}
