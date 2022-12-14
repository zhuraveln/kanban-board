import React from 'react'

import { Board } from './newBoard'
import { createNewBoard } from '../../../redux/board/actions'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useFormData } from '../../../hooks/useFormData'

import { Button, Form, TextField } from '../..'

import { BoardItem } from './types'
import { closeModal } from '../../../redux/modal/actions'

export type CreateBoardFormFields = {
  name: string
}

export const FormCreateBoard: React.FC = () => {
  const dispatch = useAppDispatch()

  // Custom Hook for collection all values from form fields
  const { values, handleChange, handleSubmit } = useFormData({
    name: '' // initial values for hook
  })
  const onSubmit = (data: CreateBoardFormFields) => {
    const newBoard: BoardItem = new Board(data) // create new Board object
    dispatch(createNewBoard(newBoard)) // create Board in Redux state
    dispatch(closeModal()) // close modal
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Title for Form*/}
      <h2>Create Board</h2>

      {/* Input for name board */}
      <TextField
        required
        value={values.name}
        onChange={handleChange}
        type='text'
        name='name'
        label={'Board name '}
      />

      {/* Button for create new Board */}
      <Button type={'submit'}>Create new board</Button>
    </Form>
  )
}
