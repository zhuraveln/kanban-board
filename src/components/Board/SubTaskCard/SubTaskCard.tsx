import React from 'react'
import { SubTaskItem } from '../../Forms/FormCreateBoard/types'
import { TextField } from '../../UI/InputTextField/TextField'

import classes from './SubTaskCard.module.scss'

export const SubTaskCard: React.FC<SubTaskItem> = props => {
  const { title, isComplete } = props // subtask values

  const [checked, setChecked] = React.useState(isComplete)

  const onClickHandler = () => {
    setChecked(!checked)
  }

  return (
    <div className={classes.root} onClick={onClickHandler}>
      <TextField
        type={'checkbox'}
        className={classes.checkbox}
        checked={checked}
        onChange={onClickHandler}
      />
      <div className={classes.title}>{title}</div>
    </div>
  )
}
