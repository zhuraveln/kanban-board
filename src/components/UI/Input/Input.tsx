import React from 'react'

import classes from './Input.module.scss'
import { IInputProps } from './types'

export const Input: React.FC<IInputProps> = ({
  onChange,
  name,
  placeholder,
  value = ''
}) => {
  const [inputValue, setInputValue] = React.useState(value)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    onChange(event.target.value)
  }
  return (
    <input
      className={classes.root}
      onChange={event => onChangeHandler(event)}
      name={name}
      placeholder={placeholder}
      value={inputValue}
    />
  )
}
