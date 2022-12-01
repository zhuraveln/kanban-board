import React from 'react'
import { useSelector } from 'react-redux'
import { projectSelector } from '../../redux/selectors'
import { FormCreateProject } from '../FormCreateProject/FormCreateProject'

import { Modal } from '../Modal/Modal'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { Button } from '../UI/Button/Button'

import classes from './ProjectsList.module.scss'

export const ProjectsList: React.FC = () => {
  // State for Modal window
  const [modalActive, setModalActive] = React.useState(false)

  const { projects } = useSelector(projectSelector)

  return (
    <div className={classes.root}>
      {/* Create project area */}
      <div className={classes.createArea}>
        <Button onClick={() => setModalActive(true)}>Create project +</Button>
      </div>

      {/* Project list */}
      <div className={classes.projectList}>
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>

      {/* Modal window for create new Project*/}
      <Modal
        title={'Create Project'}
        active={modalActive}
        setActive={setModalActive}
      >
        <FormCreateProject setModalActive={setModalActive} />
      </Modal>
    </div>
  )
}
