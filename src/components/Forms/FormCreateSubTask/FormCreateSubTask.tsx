import React from 'react'

import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useFormData } from '../../../hooks/useFormData'

import { Button, Form, TextField } from '../..'

import { CreateSubTaskFormFields, IFormCreateSubTaskProps } from './types'
import { SubTask } from './newSubTask'
import { SubTaskItem } from '../FormCreateBoard/types'
import { createNewSubTask } from '../../../redux/board/actions'

export const FormCreateSubTask: React.FC<IFormCreateSubTaskProps> = ({
  setVisibleInput
}) => {
  const dispatch = useAppDispatch()

  // Custom Hook for collection all values from form fields
  const { values, handleChange, handleSubmit } = useFormData({
    title: '', // initial values for hook
    isComplete: false
  })

  // Handler for submit form
  const onSubmit = (data: CreateSubTaskFormFields) => {
    const newSubTask: SubTaskItem = new SubTask(data) // create new Subtask object
    dispatch(createNewSubTask(newSubTask)) // create Subtask in Redux state
    setVisibleInput(prev => !prev) // hide input for create new Subtask in Task component
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ flexDirection: 'row' }}>
      {/* Input for title Subtask */}
      <TextField
        required
        value={values.title}
        onChange={handleChange}
        type='text'
        name='title'
        placeholder={'title'}
      />

      {/* Button for create new Subtask */}
      <Button type={'submit'}>+</Button>
    </Form>
  )
}
