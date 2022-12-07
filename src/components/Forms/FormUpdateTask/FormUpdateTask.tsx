import dayjs from 'dayjs'
import React from 'react'

import { Button, Form, Select, TextField } from '../..'
import { useAppDispatch, useAppSelector, useFormData } from '../../../hooks'
import { setCurrentTask, updateTask } from '../../../redux/board/actions'
import { currentTaskSelector } from '../../../redux/board/selectors'
import {
  ModalContentTypes,
  setModalContent
} from '../../../redux/modal/actions'
import { CurrentTaskItem } from '../../../redux/board/types'

import { PriorityTypes } from '../FormCreateBoard/types'
import { UpdateTaskFormFields } from './types'
import { updatedTask } from './updatedTask'

export const FormUpdateTask: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting current Task from Redux state
  const task = useAppSelector(currentTaskSelector())

  // Custom Hook for collect all values from form fields
  const [values, handleChange, handleSubmit] = useFormData({
    title: task?.title,
    description: task?.description,
    targetDate: dayjs(task?.targetDate).format('YYYY-MM-DDThh:mm'),
    priority: task?.priority
  })

  // Handler for submit form
  const onSubmit = (data: UpdateTaskFormFields) => {
    if (task) {
      const newUpdatedTask: CurrentTaskItem = new updatedTask(data, task) // create updated Task object
      dispatch(updateTask(newUpdatedTask)) // update Task in state
      dispatch(setCurrentTask(newUpdatedTask)) // set updated Task to 'CurrentTask' in state
      dispatch(setModalContent(ModalContentTypes.FULL_TASK)) // open modal window with updated Task
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* TextField for title task */}
      <TextField
        required
        onChange={handleChange}
        defaultValue={task?.title}
        type='text'
        name='title'
        label={'Task title '}
        placeholder={'title'}
      />

      {/* TextField for description task */}
      <TextField
        onChange={handleChange}
        defaultValue={task?.description}
        type='text'
        name='description'
        label={'Task description '}
        placeholder={'title'}
      />

      {/* TextField for target date task */}
      <TextField
        onChange={handleChange}
        defaultValue={dayjs(task?.targetDate).format('YYYY-MM-DDThh:mm')}
        type='datetime-local'
        name='targetDate'
        label={'Target Date '}
      />

      {/* Select priority for task */}
      <Select
        options={PriorityTypes}
        onChange={handleChange}
        defaultValue={task?.priority}
        name='priority'
        label={'Priority'}
      />

      {/* Button for update Task */}
      <Button type={'submit'}>Update task</Button>
    </Form>
  )
}
