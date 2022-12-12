import React from 'react'

import classes from './TextField.module.scss'

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const TextField: React.FC<ITextField> = ({ label, ...props }) => {
  return (
    <div className={classes.root}>
      <p className={classes.label}>{label}</p>
      <input className={classes.input} autoComplete={'off'} {...props} />
    </div>
  )
}
