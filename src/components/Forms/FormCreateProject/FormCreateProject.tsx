import React from 'react'

import { useDispatch } from 'react-redux'
import { useFormData } from '../../../hooks/useFormData/useFormData'

import { createNewProject } from '../../../redux/reducers/projectReducer'

import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { TextField } from '../../UI/InputTextField/TextField'

import { CreateTaskFormFields, IFormCreateProjectProps } from './types'
import { Project } from './newProject'

export const FormCreateProject: React.FC<IFormCreateProjectProps> = ({
  setModalActive
}) => {
  const dispatch = useDispatch()

  // Custom Hook for collection all values in form fields
  const [values, handleChange, handleSubmit] = useFormData({
    projectName: ''
  })
  const onSubmit = (data: CreateTaskFormFields) => {
    const newProject = new Project(data.projectName)

    dispatch(createNewProject(newProject.startProject))
    setModalActive(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* TextField for title project */}
      <TextField
        required
        handleChange={handleChange}
        type='text'
        name='projectName'
        label={'Project Name '}
        placeholder={'TextField title'}
      />

      {/* Button for create new Project */}
      <Button type={'submit'}>Create new project</Button>
    </Form>
  )
}
