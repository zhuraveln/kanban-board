import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button/Button'

import classes from './ProjectBoard.module.scss'
import { ProjectTask } from './ProjectTask/ProjectTask'

export const ProjectBoard: React.FC = () => {
  return (
    <div className={classes.root}>
      {/* Button for back to Project list */}
      <Link to={'/'}>
        <Button>Back to Project List</Button>
      </Link>

      {/* Board for tasks */}
      <div className={classes.board}>
        {/* Queue Column*/}
        <div className={classes.tasksColumn}>
          <h2>Queue</h2>
          <ProjectTask />
        </div>

        {/* Development Column*/}
        <div className={classes.tasksColumn}>
          <h2>Development</h2>
          <ProjectTask />
        </div>

        {/* Done Column */}
        <div className={classes.tasksColumn}>
          <h2>Done</h2>
          <ProjectTask />
        </div>
      </div>
    </div>
  )
}
