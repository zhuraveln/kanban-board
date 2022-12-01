import React from 'react'
import { Link } from 'react-router-dom'

import { ProjectItem } from '../../../redux/reducers/types'

import classes from './ProjectCard.module.scss'

export const ProjectCard: React.FC<ProjectItem> = ({ projectName, id }) => {
  return (
    <Link to={`/board/${id}`}>
      <div className={classes.root}>
        <div className={classes.title}>
          <h4>{projectName}</h4>
        </div>
      </div>
    </Link>
  )
}
