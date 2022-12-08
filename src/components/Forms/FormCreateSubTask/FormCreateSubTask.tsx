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

  // Custom Hook for collection all values in form fields
  const { handleChange, handleSubmit } = useFormData({
    title: '', // initial values for hook
    isComplete: false
  })
  const onSubmit = (data: CreateSubTaskFormFields) => {
    const newSubTask: SubTaskItem = new SubTask(data) // create new Board object
    dispatch(createNewSubTask(newSubTask)) // create Subtask in Redux state
    setVisibleInput(false) // hide input for create new Subtask in FullTask component
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ flexDirection: 'row' }}>
      {/* Input for title Subtask */}
      <TextField
        required
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
