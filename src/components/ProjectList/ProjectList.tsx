import React from 'react'
import { FormCreateProject } from '../FormCreateProject/FormCreateProject'

import { Modal } from '../Modal/Modal'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { Button } from '../UI/Button/Button'

import classes from './ProjectList.module.scss'

export const ProjectList: React.FC = () => {
  // State for Modal window
  const [modalActive, setModalActive] = React.useState(true)

  return (
    <div className={classes.root}>
      {/* Create project area */}
      <div className={classes.createArea}>
        <Button onClick={() => setModalActive(true)}>Create project +</Button>
      </div>

      {/* Project list */}
      <div className={classes.projectList}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      {/* Modal window for create new Project*/}
      <Modal
        title={'Create Project'}
        active={modalActive}
        setActive={setModalActive}
      >
        <FormCreateProject />
      </Modal>
    </div>
  )
}
