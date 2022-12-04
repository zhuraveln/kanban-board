import React from 'react'

import { useAppDispatch } from '../../../hooks/useAppDispatch'

import { useFormData } from '../../../hooks/useFormData'

import { createNewTask } from '../../../redux/actions'

import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { TextField } from '../../UI/InputTextField/TextField'

import { uniqId } from '../../../utils/uniqId'

import { CreateTaskFormFields, IFormCreateTaskProps } from './types'

export const FormCreateTask: React.FC<IFormCreateTaskProps> = ({
  setModalActive
}) => {
  const dispatch = useAppDispatch()

  // Custom Hook for collect all values from form fields
  const [values, handleChange, handleSubmit] = useFormData({
    title: '',
    description: ''
  })

  const onSubmit = (data: CreateTaskFormFields) => {
    dispatch(createNewTask({ ...data, id: uniqId() }))
    setModalActive(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* TextField for title task */}
      <TextField
        required
        handleChange={handleChange}
        type='text'
        name='title'
        label={'Task title '}
        placeholder={'TextField title'}
      />

      {/* TextField for description task */}
      <TextField
        // required
        handleChange={handleChange}
        type='text'
        name='description'
        label={'Task description '}
        placeholder={'TextField title'}
      />

      {/* Button for create new Task */}
      <Button type={'submit'}>Create new task</Button>
    </Form>
  )
}
