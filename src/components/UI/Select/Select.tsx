import React from 'react'

import { ISelectProps } from './types'

import classes from './Select.module.scss'

export const Select: React.FC<ISelectProps> = ({
  options,
  label,
  ...props
}) => {
  // Transformation options values to Array
  const optionsValues: String[] = Object.values(options)

  return (
    <div className={classes.root}>
      <p>{label}</p>
      <select {...props} className={classes.select}>
        {optionsValues.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  )
}
