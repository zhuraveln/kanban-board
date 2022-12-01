import React from 'react'

import { useFormData } from '../../../hooks/useFormData/useFormData'

import { useAppDispatch } from '../../../redux/store'
import { createNewProject } from '../../../redux/reducers/projectReducer'
import { ProjectItem } from '../../../redux/reducers/types'

import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { TextField } from '../../UI/InputTextField/TextField'

import { uniqId } from '../../../utils/uniqId'

import { IFormCreateProjectProps } from './types'

export const FormCreateProject: React.FC<IFormCreateProjectProps> = ({
  setModalActive
}) => {
  const dispatch = useAppDispatch()

  // Custom Hook for collection all values in form fields
  const [values, handleChange, handleSubmit] = useFormData({
    projectName: ''
  })
  const onSubmit = (data: ProjectItem) => {
    //@ts-ignore
    dispatch(createNewProject({ ...data, id: uniqId(), tasks: [] }))
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
