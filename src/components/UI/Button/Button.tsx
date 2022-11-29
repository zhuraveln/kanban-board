import React from 'react'

import classes from './Button.module.scss'
import { IButtonProps } from './types'

export const Button: React.FC<IButtonProps> = ({
  styles,
  children,
  onClick
}) => {
  return (
    <button className={classes.root} style={{ ...styles }} onClick={onClick}>
      {children}
    </button>
  )
}
