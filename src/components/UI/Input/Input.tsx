import React from 'react'

import classes from './Input.module.scss'
import { IInputProps } from './types'

export const Input: React.FC<IInputProps> = ({
  label,
  handleChange,
  ...props
}) => {
  const [inputValue, setInputValue] = React.useState('')

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event)
    setInputValue(event.target.value)
  }

  return (
    <label>
      {label}
      <input
        className={classes.root}
        value={inputValue}
        onChange={event => onChangeHandler(event)}
        autoComplete={'off'}
        {...props}
      />
    </label>
  )
}
