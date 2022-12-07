import React from 'react'
import { SubTaskItem } from '../../Forms/FormCreateBoard/types'
import { TextField } from '../../UI/InputTextField/TextField'

import classes from './SubTaskCard.module.scss'

export const SubTaskCard: React.FC<SubTaskItem> = props => {
  const { title } = props // subtask values
  return (
    <div className={classes.root}>
      <TextField type={'checkbox'} className={classes.checkbox} />
      <div className={classes.title}>{title}</div>
    </div>
  )
}
