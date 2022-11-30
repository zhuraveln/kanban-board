import React from 'react'

import { useFormData } from '../../hooks/useFormData/useFormData'
import { Button } from '../UI/Button/Button'

import { Form } from '../UI/Form/Form'
import { Input } from '../UI/Input/Input'

import classes from './FormCreateProject.module.scss'

export const FormCreateProject: React.FC = () => {
  // Custom Hook for collection all values in form fields
  const [values, handleChange, handleSubmit] = useFormData()

  // console.log(values)

  return (
    <Form onSubmit={handleSubmit}>
      {/* Input for title project */}
      <Input
        required
        handleChange={handleChange}
        type='text'
        name='projectTitle'
        label={'Project Title '}
        placeholder={'input title'}
      />

      {/* Input for description project */}
      <Input
        handleChange={handleChange}
        type='text'
        name='projectDescription'
        label={'Project Description '}
        placeholder={'input description'}
      />

      {/* Button for create new Project */}
      <Button type={'submit'}>Create new project</Button>
    </Form>
  )
}
