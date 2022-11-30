import React from 'react'

import classes from './TextField.module.scss'
import { ITextFieldProps } from './types'

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
    <label>
      {label}
      <input
        className={classes.root}
        value={TextFieldValue}
        onChange={event => onChangeHandler(event)}
        autoComplete={'off'}
        {...props}
      />
    </label>
  )
}
