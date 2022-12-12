import React from 'react'

import { useAppDispatch, useAppSelector, useFormData } from '../../../hooks'

import { createdTasksCounterSelector } from '../../../redux/board/selectors'
import { closeModal } from '../../../redux/modal/actions'
import { createNewTask } from '../../../redux/board/actions'

import { Button, Form, Select, TextField } from '../..'

import { CreateTaskFormFields } from './types'
import { PriorityTypes, TaskItem } from '../FormCreateBoard/types'

import { Task } from './newTask'
import FileAPI from '../../../API/FileAPI'

export const FormCreateTask: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting tasks counter for current board from Redux
  const { createdTasksCounter } = useAppSelector(createdTasksCounterSelector())

  // Custom Hook for collect all values from form fields
  const { values, handleChange, handleSubmit } = useFormData({
    title: '', // initial values for hook
    description: '',
    finishBy: '',
    file: null,
    priority: PriorityTypes.LOW
  })

  // Handler for submit form
  const onSubmit = async (data: CreateTaskFormFields) => {
    const uploadedFile = await FileAPI.fetchUploadFile(data.file) // upload file to Firebase
    const newTask: TaskItem = new Task(data, createdTasksCounter, uploadedFile) // create new Task object
    dispatch(createNewTask(newTask)) // create Task in Redux state
    dispatch(closeModal()) // close modal
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Title for Form*/}
      <h2>Create Task</h2>

      {/* Input for title task */}
      <TextField
        required
        value={values.title}
        onChange={handleChange}
        type='text'
        name='title'
        label={'Task title'}
      />

      {/* Input for description task */}
      <TextField
        value={values.description}
        onChange={handleChange}
        type='text'
        name='description'
        label={'Task description'}
      />

      {/* Input for target date task */}
      <TextField
        value={values.finishBy}
        onChange={handleChange}
        type='datetime-local'
        name='finishBy'
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

      {/* Input to attach file for task */}
      <TextField
        onChange={handleChange}
        type='file'
        name='file'
        label={'Attach file'}
      />

      {/* Button for create new Task */}
      <Button type={'submit'}>Create new task</Button>
    </Form>
  )
}
