import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useFormData } from '../../hooks/useFormData/useFormData'
import { Button } from '../UI/Button/Button'

import { Form } from '../UI/Form/Form'
import { TextField } from '../UI/InputTextField/TextField'

import classes from './FormCreateProject.module.scss'

export const FormCreateProject: React.FC = () => {
  const dispatch = useDispatch()
  //@ts-ignore
  const projectList = useSelector(state => state.project)

  // Custom Hook for collection all values in form fields
  const [values, handleChange, handleSubmit] = useFormData({
    projectTitle: '',
    projectDescription: ''
  })

  const onSubmit = (data: any) => {
    dispatch({ type: 'CREATE_NEW_PROJECT', payload: data })
    console.log(projectList)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* TextField for title project */}
      <TextField
        required
        handleChange={handleChange}
        type='text'
        name='projectTitle'
        label={'Project Title '}
        placeholder={'TextField title'}
      />

      {/* TextField for description project */}
      <TextField
        handleChange={handleChange}
        type='text'
        name='projectDescription'
        label={'Project Description '}
        placeholder={'TextField description'}
      />

      {/* Button for create new Project */}
      <Button type={'submit'}>Create new project</Button>
    </Form>
  )
}
