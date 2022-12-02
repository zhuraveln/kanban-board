import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import { ProjectTaskCard } from './ProjectTaskCard/ProjectTaskCard'

import { FormCreateTask } from '../Forms/FormCreateTask/FormCreateTask'

import { Modal } from '../Modal/Modal'
import { Button } from '../UI/Button/Button'

import { useDispatch, useSelector } from 'react-redux'
import { projectSelector } from '../../redux/selectors'

import classes from './ProjectBoard.module.scss'
import { sortDroppableTasks } from '../../redux/actions'

export const ProjectBoard: React.FC = () => {
  const dispatch = useDispatch()

  // Getting parameters from URL
  const { id } = useParams() as { id: string }

  // Getting Project by id from state
  const project = useSelector(projectSelector(id))

  // State for Modal window
  const [modalActive, setModalActive] = React.useState(false)

  const onDragEndHandler = (result: DropResult) => {
    const { source, destination, draggableId } = result

    if (!destination) {
      return
    }

    dispatch(
      sortDroppableTasks(
        id,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  }

  return (
    <div className={classes.root}>
      {/* Button for back to Project list */}
      <Link to={'/'}>
        <Button>Back to Project List</Button>
      </Link>

      {/* Button for Create new Task */}
      <Button onClick={() => setModalActive(true)}>Create new Task</Button>

      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className={classes.boards}>
          {project?.boards?.map(board => (
            <Droppable droppableId={board.id} key={board.id}>
              {provided => (
                <div
                  className={classes.tasksColumn}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2>{board.boardName}</h2>
                  {board.tasks?.map((task, index) => (
                    <ProjectTaskCard {...task} key={task.id} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {/* Modal window for create new Task*/}
      <Modal
        title={'Create task'}
        active={modalActive}
        setActive={setModalActive}
      >
        <FormCreateTask setModalActive={setModalActive} projectId={id} />
      </Modal>
    </div>
  )
}
