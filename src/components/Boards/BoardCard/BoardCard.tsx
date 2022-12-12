import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { setCurrentBoardIndex } from '../../../redux/board/actions'

import { BoardCardProps } from './types'

import classes from './BoardCard.module.scss'

export const BoardCard: React.FC<BoardCardProps> = ({ name, boardIndex }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // Handler for click on Board Card
  const onClickBoardCard = () => {
    navigate(`/board/${name}`)
    dispatch(setCurrentBoardIndex(boardIndex))
  }

  return (
    <div className={classes.root} onClick={onClickBoardCard}>
      <h4>{name}</h4>
    </div>
  )
}
