import React from 'react'

import classes from './Select.module.scss'

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Object
  label?: string
}

export const Select: React.FC<ISelect> = ({ options, label, ...props }) => {
  // Transformation options values to Array
  const optionsValues: String[] = Object.values(options)

  return (
    <div className={classes.root}>
      <p className={classes.label}>{label}</p>
      <select {...props} className={classes.select}>
        {optionsValues.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  )
}
