import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { boardsSelector } from '../../../redux/board/selectors'

import { BoardCard, Button } from '../..'

import { setModalContent } from '../../../redux/modal/actions'

import classes from './BoardsList.module.scss'
import { ModalContentTypes } from '../../Modal/types'

export const BoardsList: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting all boards from Redux state
  const { boards } = useAppSelector(boardsSelector)

  return (
    <div className={classes.root}>
      {/* Create board area */}
      <div className={classes.createArea}>
        {/* Button for Create new Board */}
        <Button
          onClick={() =>
            dispatch(setModalContent(ModalContentTypes.FORM_CREATE_BOARD))
          } // open modal window with form for create new board
        >
          Create board +
        </Button>
      </div>

      {/* Board list */}
      <div className={classes.boardList}>
        {boards?.map((board, index) => (
          <BoardCard {...board} key={board.id} boardIndex={index} />
        ))}
      </div>
    </div>
  )
}