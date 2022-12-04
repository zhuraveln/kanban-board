import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { setcurrentBoardIndex } from '../../../redux/actions'

import { BoardCardProps } from './types'

import classes from './BoardCard.module.scss'

export const BoardCard: React.FC<BoardCardProps> = ({ name, boardIndex }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // Handler for click on Board Card
  const onClickBoardCardHandler = () => {
    navigate(`/board/${name}`)
    dispatch(setcurrentBoardIndex(boardIndex))
  }

  return (
    <div className={classes.root} onClick={onClickBoardCardHandler}>
      <div className={classes.title}>
        <h4>{name}</h4>
      </div>
    </div>
  )
}
