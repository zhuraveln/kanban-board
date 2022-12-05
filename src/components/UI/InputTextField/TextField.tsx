import React from 'react'

import { ITextFieldProps } from './types'

import classes from './TextField.module.scss'

export const TextField: React.FC<ITextFieldProps> = ({
  label,
  handleChange,
  ...props
}) => {
  const [TextFieldValue, setTextFieldValue] = React.useState('')

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event)
    setTextFieldValue(event.target.value)
  }

  return (
    <div className={classes.root}>
      <p>{label}</p>
      <input
        className={classes.input}
        value={TextFieldValue}
        onChange={event => onChangeHandler(event)}
        autoComplete={'off'}
        {...props}
      />
    </div>
  )
}
