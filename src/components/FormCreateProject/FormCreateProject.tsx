import React from 'react'

import { Form } from '../UI/Form/Form'
import { Input } from '../UI/Input/Input'

import classes from './FormCreateProject.module.scss'

export const FormCreateProject = () => {
  return (
    <Form>
      {/* Input for title project */}
      <Input
        // onChange={event => console.log(event)}
        required
        type='text'
        name='projectTitle'
        label={'Project Title '}
        placeholder={'input title'}
      />

      {/* Input for description project */}
      <Input
        type='text'
        name='projectDescription'
        label={'Project Description '}
        placeholder={'input description'}
      />
    </Form>
  )
}
