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

      {/* Board for tasks */}
      <div className={classes.board}>
        {/* Queue Column*/}
        <div className={classes.tasksColumn}>
          <h2>Queue</h2>
          {project?.tasks?.map(task => (
            <ProjectTaskCard {...task} key={task.id} />
          ))}
        </div>

        {/* Development Column*/}
        <div className={classes.tasksColumn}>
          <h2>Development</h2>
        </div>

        {/* Done Column */}
        <div className={classes.tasksColumn}>
          <h2>Done</h2>
        </div>
      </div>

      {/* Modal window for create new Task*/}
      <Modal
        title={'Create task'}
        active={modalActive}
        setActive={setModalActive}
      >
        <FormCreateTask setModalActive={setModalActive} id={id} />
      </Modal>
    </div>
  )
}
function tasksSelector(id: string): (state: unknown) => unknown {
  throw new Error('Function not implemented.')
}
