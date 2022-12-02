import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { ProjectTaskCard } from './ProjectTaskCard/ProjectTaskCard'

import { FormCreateTask } from '../Forms/FormCreateTask/FormCreateTask'

import { Modal } from '../Modal/Modal'
import { Button } from '../UI/Button/Button'

import { useSelector } from 'react-redux'
import { projectSelector } from '../../redux/selectors'

import classes from './ProjectBoard.module.scss'

export const ProjectBoard: React.FC = () => {
  // State for Modal window
  const [modalActive, setModalActive] = React.useState(false)

  const { id } = useParams() as { id: string }

  const project = useSelector(projectSelector(id))

  return (
    <div className={classes.root}>
      {/* Button for back to Project list */}
      <Link to={'/'}>
        <Button>Back to Project List</Button>
      </Link>

      {/* Button for Create new Task */}
      <Button onClick={() => setModalActive(true)}>Create new Task</Button>

      {/* Boards for tasks */}
      <div className={classes.boards}>
        {/* Board Column*/}
        {project?.boards?.map(board => (
          <div className={classes.tasksColumn} key={board.id}>
            <h2>{board.boardName}</h2>
            {board.tasks?.map(task => (
              <ProjectTaskCard {...task} key={task.id} />
            ))}
          </div>
        ))}
      </div>

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
