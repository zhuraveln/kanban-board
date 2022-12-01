import React from 'react'
import { TaskItem } from '../../../redux/reducers/types'

import classes from './ProjectTaskCard.module.scss'

export const ProjectTaskCard: React.FC<TaskItem> = ({ title, description }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.decription}>{description}</div>
    </div>
  )
}
