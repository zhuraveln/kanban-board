import React from 'react'

import classes from './Input.module.scss'
import { IInputProps } from './types'

// export const Input: React.FC<IInputProps> = ({
//   onChange,
//   name,
//   placeholder,
//   value = ''
// }) => {
//   const [inputValue, setInputValue] = React.useState(value)

//   const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value)
//     onChange(event.target.value)
//   }
//   return (
//     <input
//       className={classes.root}
//       onChange={event => onChangeHandler(event)}
//       name={name}
//       placeholder={placeholder}
//       value={inputValue}
//     />
//   )
// }

export const Input: React.FC<IInputProps> = ({ label, ...props }) => {
  const [inputValue, setInputValue] = React.useState(props.value)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    // onChange(event.target.value)
  }
  return (
    <label>
      {label}
      <input
        className={classes.root}
        value={inputValue}
        onChange={event => onChangeHandler(event)}
        {...props}
      />
    </label>
  )
}
