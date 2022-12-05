import React from 'react'
import { Board } from './newBoard'
import { createNewBoard } from '../../../redux/actions'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useFormData } from '../../../hooks/useFormData'
import { Button } from '../../UI/Button/Button'
import { Form } from '../../UI/Form/Form'
import { TextField } from '../../UI/InputTextField/TextField'
import {
  BoardItem,
  CreateBoardFormFields,
  IFormCreateBoardProps
} from './types'

export const FormCreateBoard: React.FC<IFormCreateBoardProps> = ({
  setModalActive
}) => {
  const dispatch = useAppDispatch()

  // Custom Hook for collection all values in form fields
  const [values, handleChange, handleSubmit] = useFormData({
    name: ''
  })
  const onSubmit = (data: CreateBoardFormFields) => {
    const newBoard: BoardItem = new Board(data)

    dispatch(createNewBoard(newBoard))
    setModalActive(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* TextField for title board */}
      <TextField
        required
        handleChange={handleChange}
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
