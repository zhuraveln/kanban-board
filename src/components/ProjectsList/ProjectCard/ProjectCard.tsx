import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectItem } from '../../Forms/FormCreateProject/types'

import classes from './ProjectCard.module.scss'

export const ProjectCard: React.FC<ProjectItem> = ({
  projectName,
  projectId
}) => {
  return (
    <Link to={`/board/${projectId}`}>
      <div className={classes.root}>
        <div className={classes.title}>
          <h4>{projectName}</h4>
        </div>
      </div>
    </Link>
  )
}
