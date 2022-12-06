import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { boardsSelector } from '../../../redux/board/selectors'

import { BoardCard, Button, FormCreateBoard, Modal } from '../..'

import classes from './BoardsList.module.scss'
import { setModalContent } from '../../../redux/modal/actions'
import { ModalContentTypes } from '../../Modal/defineModalEl'

export const BoardsList: React.FC = () => {
  const dispatch = useAppDispatch()

  // Getting all boards from Redux state
  const { boards } = useAppSelector(boardsSelector)

  return (
    <div className={classes.root}>
      {/* Create board area */}
      <div className={classes.createArea}>
        {/* <Button onClick={() => setModalActive(true)}>Create board +</Button> */}
        <Button
          onClick={() =>
            dispatch(setModalContent(ModalContentTypes.FORM_CREATE_BOARD))
          }
        >
          Create board +
        </Button>
      </div>

      {/* Board list */}
      <div className={classes.boardList}>
        {boards.map((board, index) => (
          <BoardCard {...board} key={board.id} boardIndex={index} />
        ))}
      </div>
    </div>
  )
}
