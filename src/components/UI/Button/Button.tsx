import React from 'react'

import { IButtonProps } from './types'

import classes from './Button.module.scss'

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

// export const Button: React.FC<IButtonProps> = ({ children, props }) => {
//   return (
//     <button className={classes.root} {...props}>
//       {children}
//     </button>
//   )
// }
