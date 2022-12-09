import React from 'react'

import { useAppDispatch, useAppSelector, useFormData } from '../../../hooks'

import { createdTasksCounterSelector } from '../../../redux/board/selectors'
import { closeModal } from '../../../redux/modal/actions'
import { createNewTask } from '../../../redux/board/actions'

import { Button, Form, Select, TextField } from '../..'

import { CreateTaskFormFields } from './types'
import { PriorityTypes, TaskItem } from '../FormCreateBoard/types'

import { Task } from './newTask'

export const FormCreateTask: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting tasks counter for current board from Redux
  const { createdTasksCounter: createdTasksCounter } = useAppSelector(
    createdTasksCounterSelector()
  )

  // Custom Hook for collect all values from form fields
  const { values, handleChange, handleSubmit } = useFormData({
    title: '', // initial values for hook
    description: '',
    targetDate: '',
    priority: PriorityTypes.LOW
  })

  // Handler for submit form
  const onSubmit = (data: CreateTaskFormFields) => {
    const newTask: TaskItem = new Task(data, createdTasksCounter) // create new Task object
    dispatch(createNewTask(newTask)) // create Task in Redux state
    dispatch(closeModal()) // close modal
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Input for title task */}
      <TextField
        required
        value={values.title}
        onChange={handleChange}
        type='text'
        name='title'
        label={'Task title'}
        placeholder={'title'}
      />

      {/* Input for description task */}
      <TextField
        value={values.description}
        onChange={handleChange}
        type='text'
        name='description'
        label={'Task description'}
        placeholder={'title'}
      />

      {/* Input for target date task */}
      <TextField
        value={values.targetDate}
        onChange={handleChange}
        type='datetime-local'
        name='targetDate'
        label={'Target Date'}
      />

      {/* Select priority for task */}
      <Select
        value={values.priority}
        onChange={handleChange}
        name='priority'
        options={PriorityTypes}
        label={'Priority'}
      />

      {/* Button for create new Task */}
      <Button type={'submit'}>Create new task</Button>
    </Form>
  )
}
