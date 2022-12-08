import React from 'react'

import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useFormData } from '../../../hooks/useFormData'

import { Button, Form, TextField } from '../..'

import { CreateCommentFormFields, IFormCreateCommentProps } from './types'
import { Comment } from './newComment'
import { CommentItem } from '../FormCreateBoard/types'
import { createNewComment } from '../../../redux/board/actions'

export const FormCreateComment: React.FC<IFormCreateCommentProps> = ({
  setVisibleInput
}) => {
  const dispatch = useAppDispatch()

  // Custom Hook for collection all values in form fields
  const { handleChange, handleSubmit } = useFormData({
    title: '' // initial values for hook
  })

  // Handler for submit form
  const onSubmit = (data: CreateCommentFormFields) => {
    const newComment: CommentItem = new Comment(data) // create new Board object
    dispatch(createNewComment(newComment)) // create Subtask in Redux state
    setVisibleInput(false) // hide input for create new Subtask in FullTask component
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ flexDirection: 'row' }}>
      {/* Input for title Comment */}
      <TextField
        required
        onChange={handleChange}
        type='text'
        name='title'
        placeholder={'comment'}
      />

      {/* Button for create new Comment */}
      <Button type={'submit'}>+</Button>
    </Form>
  )
}
