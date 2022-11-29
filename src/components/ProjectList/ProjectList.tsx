import React from 'react'

import { Modal } from '../Modal/Modal'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { Button } from '../UI/Button/Button'

import classes from './ProjectList.module.scss'

export const ProjectList = () => {
  // State for Modal window
  const [modalActive, setModalActive] = React.useState(false)

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

      {/* Modal window */}
      <Modal
        title={'Create Project'}
        active={modalActive}
        setActive={setModalActive}
      >
        Content
      </Modal>
    </div>
  )
}
