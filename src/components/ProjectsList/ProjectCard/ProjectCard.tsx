import React from 'react'
import { Link } from 'react-router-dom'

import { ProjectItem } from '../../../redux/reducers/types'

import classes from './ProjectCard.module.scss'

export const ProjectCard: React.FC<ProjectItem> = ({
  projectTitle,
  projectDescription
}) => {
  return (
    <Link to={`/board/${'id'}`}>
      <div className={classes.root}>
        <div className={classes.title}>
          <h4>{projectTitle}</h4>
        </div>
        <div className={classes.description}>
          <p>{projectDescription}</p>
        </div>
      </div>
    </Link>
  )
}
