import React from 'react'
import dayjs from 'dayjs'

import { useAppDispatch, useAppSelector, useFormData } from '../../../hooks'

import { tasksCounterSelector } from '../../../redux/board/selectors'
import { createNewTask } from '../../../redux/board/actions'

import { Button, Form, Select, TextField } from '../..'

import { CreateTaskFormFields } from './types'
import { PriorityTypes, TaskItem } from '../FormCreateBoard/types'

import { Task } from './newTask'
import { closeModal } from '../../../redux/modal/actions'

export const FormCreateTask: React.FC = () => {
  const dispatch = useAppDispatch()
  // Getting tasks counter in current board from Redux
  const { tasksCounter } = useAppSelector(tasksCounterSelector())

  // Custom Hook for collect all values from form fields
  const [values, handleChange, handleSubmit] = useFormData({
    title: '',
    description: '',
    targetDate: dayjs('01.01.2023 09:00'),
    priority: PriorityTypes.LOW
  })

  // Handler for submit form
  const onSubmit = (data: CreateTaskFormFields) => {
    // Create new Task object
    const newTask: TaskItem = new Task(data, tasksCounter)
    dispatch(createNewTask(newTask))
    dispatch(closeModal())
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
        placeholder={'title'}
      />

      {/* TextField for description task */}
      <TextField
        // required
        handleChange={handleChange}
        type='text'
        name='description'
        label={'Task description '}
        placeholder={'title'}
      />

      {/* TextField for target date task */}
      <TextField
        // required
        handleChange={handleChange}
        type='datetime-local'
        name='targetDate'
        label={'Target Date '}
      />

      {/* Select priority for task */}
      <Select
        handleChange={handleChange}
        name='priority'
        options={PriorityTypes}
        label={'Priority'}
      />

      {/* Button for create new Task */}
      <Button type={'submit'}>Create new task</Button>
    </Form>
  )
}
