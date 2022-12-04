import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import { TaskCard } from '../TaskCard/TaskCard'
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

  // Getting Board by id from Redux state
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

      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className={classes.columns}>
          {board?.columns?.map((column, index) => (
            <div className={classes.container} key={column.id}>
              <h2>{column.name}</h2>
              <Droppable droppableId={String(index)}>
                {provided => (
                  <div
                    className={classes.tasksList}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {column.tasks?.map((task, index) => (
                      <TaskCard {...task} key={task.id} index={index} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
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
