import React from 'react'

import classes from './ProjectCard.module.scss'

export const ProjectCard: React.FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h4>Title</h4>
      </div>
      <div className={classes.description}>
        <p>Description</p>
      </div>
    </div>
  )
}
