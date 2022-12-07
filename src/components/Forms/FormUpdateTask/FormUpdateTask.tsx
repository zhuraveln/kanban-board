import dayjs from 'dayjs'
import React from 'react'

import { Button, Form, Select, TextField } from '../..'
import { useAppDispatch, useAppSelector, useFormData } from '../../../hooks'
import { updateTask } from '../../../redux/board/actions'
import { currentTaskSelector } from '../../../redux/board/selectors'
import { CurrentTaskItem } from '../../../redux/board/types'

import { closeModal } from '../../../redux/modal/actions'
import { PriorityTypes, TaskItem } from '../FormCreateBoard/types'
import { UpdateTaskFormFields } from './types'
import { updatedTask } from './updatedTask'

export const FormUpdateTask: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting current Task from Redux state
  const task = useAppSelector(currentTaskSelector())

  // Custom Hook for collect all values from form fields
  const [values, handleChange, handleSubmit] = useFormData({
    title: '',
    description: '',
    targetDate: dayjs('01.01.2023 09:00'),
    priority: PriorityTypes.LOW
  })

  // Handler for submit form
  const onSubmit = (data: UpdateTaskFormFields) => {
    if (task) {
      // Create updated Task object
      const newUpdatedTask: CurrentTaskItem = new updatedTask(data, task)
      dispatch(updateTask(newUpdatedTask))
      dispatch(closeModal())
    }
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
