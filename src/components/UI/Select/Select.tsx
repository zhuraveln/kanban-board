import React from 'react'

import { ISelectProps } from './types'

import classes from './Select.module.scss'

export const Select: React.FC<ISelectProps> = ({
  options,
  label,
  handleChange,
  ...props
}) => {
  // Transformation options values to Array
  const optionsValues: String[] = Object.values(options)

  const [selectedValue, setSelectedValue] = React.useState('')

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(event)
    setSelectedValue(event.target.value)
  }

  return (
    <div className={classes.root}>
      <p>{label}</p>
      <select
        {...props}
        className={classes.select}
        onChange={event => onChangeHandler(event)}
      >
        {optionsValues.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  )
}
