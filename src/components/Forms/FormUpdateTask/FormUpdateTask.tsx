import React from 'react'

import { Button, Form, Select, TextField } from '../..'
import { useAppDispatch, useAppSelector, useFormData } from '../../../hooks'
import {
  deleteTaskFileURL,
  setCurrentTask,
  updateTask
} from '../../../redux/board/actions'
import {
  currentTaskSelector,
  getTaskSelector
} from '../../../redux/board/selectors'
import { setModalContent } from '../../../redux/modal/actions'
import { CurrentTaskItem } from '../../../redux/board/types'

import { PriorityTypes } from '../FormCreateBoard/types'
import { UpdateTaskFormFields } from './types'
import { updatedTask } from './updatedTask'
import FileAPI from '../../../API/FileAPI'
import { ModalContentTypes } from '../../Modal/types'
import { dateFormat } from '../../../utils'

export const FormUpdateTask: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting current Task from Redux state
  const task = useAppSelector(currentTaskSelector())
  // Get actual subtasks and comments if client update Task after create Subtasks or Comments
  const { subtasks, comments, file } = useAppSelector(getTaskSelector())

  // const [uploadedFileURL]

  // Custom Hook for collect all values from form fields
  const { handleChange, handleSubmit, setValues } = useFormData({
    title: task?.title, // initial values for hook
    description: task?.description,
    targetDate: dateFormat(task?.finishAt),
    file: file,
    priority: task?.priority
  })

  // Handler for submit form
  const onSubmit = async (data: UpdateTaskFormFields) => {
    if (task) {
      const uploadedFileURL = await FileAPI.fetchUploadFile(data.file) // upload file to Firebase
      const newUpdatedTask: CurrentTaskItem = new updatedTask(
        data,
        {
          ...task,
          subtasks,
          comments
        },
        uploadedFileURL
      ) // create updated Task object
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
        defaultValue={dateFormat(task?.finishAt)}
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

      {/* Attached file */}
      {file ? (
        <div>
          <a href={String(file)} target='_blank' rel='noreferrer'>
            Attached file
          </a>
          <Button
            type={'button'}
            onClick={() => {
              if (task) {
                dispatch(deleteTaskFileURL(task))
                setValues(formValues => ({
                  ...formValues,
                  file: null
                }))
              }
            }}
          >
            Delete File
          </Button>
        </div>
      ) : (
        // Input to attach file for task
        <TextField
          onChange={handleChange}
          type='file'
          name='file'
          label={'Attach file'}
        />
      )}

      {/* Button for update Task */}
      <Button type={'submit'}>Update task</Button>
    </Form>
  )
}
