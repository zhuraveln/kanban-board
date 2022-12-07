import React from 'react'

import { ITextFieldProps } from './types'

import classes from './TextField.module.scss'

export const TextField: React.FC<ITextFieldProps> = ({ label, ...props }) => {
  return (
    <div className={classes.root}>
      <p>{label}</p>
      <input className={classes.input} autoComplete={'off'} {...props} />
    </div>
  )
}
