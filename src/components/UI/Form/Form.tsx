import React from 'react'
import { IFormProps } from './types'

import classes from './Form.module.scss'

export const Form: React.FC<IFormProps> = ({ children, ...props }) => {
  return (
    <form className={classes.root} {...props}>
      {children}
    </form>
  )
}
