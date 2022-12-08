import dayjs from 'dayjs'
import React from 'react'

import { Button, Form, Select, TextField } from '../..'
import { useAppDispatch, useAppSelector, useFormData } from '../../../hooks'
import { setCurrentTask, updateTask } from '../../../redux/board/actions'
import {
  currentTaskSelector,
  getTaskSelector
} from '../../../redux/board/selectors'
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
  // Get actual subtasks and comments if client update Task after create Subtasks or comments in FullTask
  const { subtasks, comments } = useAppSelector(getTaskSelector())

  // Custom Hook for collect all values from form fields
  const { handleChange, handleSubmit } = useFormData({
    title: task?.title, // initial values for hook
    description: task?.description,
    targetDate: dayjs(task?.targetDate).format('YYYY-MM-DDThh:mm'),
    priority: task?.priority
  })

  // Handler for submit form
  const onSubmit = (data: UpdateTaskFormFields) => {
    if (task) {
      const newUpdatedTask: CurrentTaskItem = new updatedTask(data, {
        ...task,
        subtasks,
        comments
      }) // create updated Task object
      dispatch(updateTask(newUpdatedTask)) // update Task in Redux state
      dispatch(setCurrentTask(newUpdatedTask)) // set updated Task to 'CurrentTask' in Redux state
      dispatch(setModalContent(ModalContentTypes.FULL_TASK)) // open modal window with updated Task
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Input for title task */}
      <TextField
        required
        onChange={handleChange}
        defaultValue={task?.title}
        type='text'
        name='title'
        label={'Task title '}
        placeholder={'title'}
      />

      {/* Input for description task */}
      <TextField
        onChange={handleChange}
        defaultValue={task?.description || ''}
        type='text'
        name='description'
        label={'Task description '}
        placeholder={'title'}
      />

      {/* Input for target date task */}
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
