import React from 'react'
import { SubTaskItem } from '../../Forms/FormCreateBoard/types'

import classes from './SubTaskCard.module.scss'

export const SubTaskCard: React.FC<SubTaskItem> = props => {
  const { title } = props
  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
    </div>
  )
}
