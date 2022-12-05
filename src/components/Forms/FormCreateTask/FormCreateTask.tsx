import React from 'react'
import dayjs from 'dayjs'

import { useAppDispatch } from '../../../hooks/useAppDispatch'

import { useFormData } from '../../../hooks/useFormData'

import { createNewTask } from '../../../redux/actions'

import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { TextField } from '../../UI/InputTextField/TextField'

import { CreateTaskFormFields, IFormCreateTaskProps } from './types'
import { Task } from './newTask'
import { TaskItem } from '../FormCreateBoard/types'

export const FormCreateTask: React.FC<IFormCreateTaskProps> = ({
  setModalActive
}) => {
  const dispatch = useAppDispatch()

  // Custom Hook for collect all values from form fields
  const [values, handleChange, handleSubmit] = useFormData({
    title: '',
    description: '',
    targetDate: dayjs('01.01.2023 09:00')
  })

  // Handler for submit form
  const onSubmit = (data: CreateTaskFormFields) => {
    const newTask: TaskItem = new Task(data)

    dispatch(createNewTask(newTask))
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

      {/* TextField for target date task */}
      <TextField
        // required
        handleChange={handleChange}
        type='datetime-local'
        name='targetDate'
        label={'Target Date '}
      />

      {/* Button for create new Task */}
      <Button type={'submit'}>Create new task</Button>
    </Form>
  )
}
