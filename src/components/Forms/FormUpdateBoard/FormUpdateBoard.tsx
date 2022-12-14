import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Form, TextField } from '../..'
import { deleteIcon } from '../../../assets'
import { useAppDispatch, useAppSelector, useFormData } from '../../../hooks'
import { deleteBoard, updateBoard } from '../../../redux/board/actions'
import { currentBoardSelector } from '../../../redux/board/selectors'
import { closeModal } from '../../../redux/modal/actions'

import { BoardItem } from '../FormCreateBoard/types'
import { updatedBoard } from './updatedBoard'

export type UpdateBoardFormFields = {
  name: string
}

export const FormUpdateBoard: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // Getting current Board from Redux state
  const board = useAppSelector(currentBoardSelector())

  // Custom Hook for collect all values from form fields
  const { handleChange, handleSubmit } = useFormData({
    name: board?.name // initial values for hook
  })

  // Handler for click 'delete Board' button
  const onClickDeleteBoard = () => {
    if (window.confirm('Are you sure to delete this Board?')) {
      dispatch(closeModal())
      setTimeout(() => navigate(`/`), 650)
      setTimeout(() => dispatch(deleteBoard()), 1200)
    }
  }

  // Handler for submit form
  const onSubmit = async (data: UpdateBoardFormFields) => {
    if (board) {
      const newUpdatedBoard: BoardItem = new updatedBoard(data, board) // create updated Board object
      dispatch(updateBoard(newUpdatedBoard)) // update Board in Redux state
      dispatch(closeModal()) // close modal window
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Title */}
      <h2>Change board details</h2>

      {/* Input for name Board */}
      <TextField
        required
        onChange={handleChange}
        defaultValue={board?.name}
        type='text'
        name='name'
        label={'Board name '}
      />

      {/* Button Delete */}
      <Button
        onClick={onClickDeleteBoard}
        style={{ backgroundColor: 'rgb(232, 106, 106)' }}
      >
        <img src={deleteIcon} alt='deleteIcon' />
      </Button>

      {/* Button for update Board */}
      <Button type={'submit'}>Save changes</Button>
    </Form>
  )
}
