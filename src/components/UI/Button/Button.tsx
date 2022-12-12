import React from 'react'

import classes from './Button.module.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  size?: 'small' | 'medium'
}

export const Button: React.FC<IButton> = ({
  children,
  size = 'small',
  ...props
}) => {
  return (
    <button
      className={
        size === 'small'
          ? `${classes.root} ${classes.small}`
          : `${classes.root} ${classes.medium}`
      }
      {...props}
    >
      {children}
    </button>
  )
}
