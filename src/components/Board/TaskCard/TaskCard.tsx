import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { ITaskCardProps } from './types'

import classes from './TaskCard.module.scss'
import { useAppDispatch } from '../../../hooks'
import {
  ModalContentTypes,
  setModalContent
} from '../../../redux/modal/actions'
import { setCurrentTask } from '../../../redux/board/actions'

export const TaskCard: React.FC<ITaskCardProps> = props => {
  const dispatch = useAppDispatch()
  // Destructuring props
  const { index, id, number, title, priority } = props

  // Handler for click on Task card
  const onClickTaskCard = () => {
    dispatch(setCurrentTask(props))
    dispatch(setModalContent(ModalContentTypes.FULL_TASK))
  }

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={classes.root}
          ref={provided.innerRef}
          onClick={onClickTaskCard}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={classes.title}>#{number}</div>
          <div className={classes.title}>{title}</div>
          <div>Priority: {priority}</div>
        </div>
      )}
    </Draggable>
  )
}
