import React from 'react'

import { Board } from './newBoard'
import { createNewBoard } from '../../../redux/board/actions'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useFormData } from '../../../hooks/useFormData'

import { Button, Form, TextField } from '../..'

import { BoardItem, CreateBoardFormFields } from './types'
import { closeModal } from '../../../redux/modal/actions'

export const FormCreateBoard: React.FC = () => {
  const dispatch = useAppDispatch()

  // Custom Hook for collection all values in form fields
  const [values, handleChange, handleSubmit] = useFormData({
    name: ''
  })
  const onSubmit = (data: CreateBoardFormFields) => {
    // Create new Board
    const newBoard: BoardItem = new Board(data)
    dispatch(createNewBoard(newBoard))
    dispatch(closeModal())
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* TextField for title board */}
      <TextField
        required
        onChange={handleChange}
        type='text'
        name='name'
        label={'Board Name '}
        placeholder={'TextField title'}
      />

      {/* Button for create new Board */}
      <Button type={'submit'}>Create new board</Button>
    </Form>
  )
}
