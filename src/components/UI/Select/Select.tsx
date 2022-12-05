import React from 'react'
import { ISelectProps } from './types'

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
    <>
      <p>{label}</p>
      <select {...props} onChange={event => onChangeHandler(event)}>
        {optionsValues.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </>
  )
}
