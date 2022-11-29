import React from 'react'

import { Form } from '../UI/Form/Form'
import { Input } from '../UI/Input/Input'

import classes from './FormCreateProject.module.scss'

export const FormCreateProject = () => {
  return (
    <Form>
      <Input
        onChange={event => console.log(event)}
        name={'test name'}
        placeholder={'test placeholder'}
      />
    </Form>
  )
}
