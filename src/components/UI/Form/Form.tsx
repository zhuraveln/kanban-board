import React from 'react'
import { IFormProps } from './types'

export const Form: React.FC<IFormProps> = ({ children, ...props }) => {
  return (
    <form noValidate {...props}>
      {children}
    </form>
  )
}
