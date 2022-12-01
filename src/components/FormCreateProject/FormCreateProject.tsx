import React from 'react'

import { useFormData } from '../../hooks/useFormData/useFormData'

import { useAppDispatch } from '../../redux/store'
import { createNewProject } from '../../redux/reducers/projectReducer'
import { ProjectItem } from '../../redux/reducers/types'

import { Button } from '../UI/Button/Button'
import { Form } from '../UI/Form/Form'
import { TextField } from '../UI/InputTextField/TextField'

import { IFormCreateProjectProps } from './types'

import classes from './FormCreateProject.module.scss'

export const FormCreateProject: React.FC<IFormCreateProjectProps> = ({
  setModalActive
}) => {
  const dispatch = useAppDispatch()

  // Custom Hook for collection all values in form fields
  const [values, handleChange, handleSubmit] = useFormData({
    projectTitle: '',
    projectDescription: ''
  })

  const onSubmit = (data: ProjectItem) => {
    dispatch(createNewProject(data))
    setModalActive(false)
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
