import React from 'react'

import classes from './Form.module.scss'

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<IForm> = ({ children, ...props }) => {
  return (
    <form className={classes.root} {...props}>
      {children}
    </form>
  )
}
