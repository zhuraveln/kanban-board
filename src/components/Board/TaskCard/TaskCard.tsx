import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import dayjs from 'dayjs'

import { ITaskCardProps } from './typex'

import classes from './TaskCard.module.scss'

export const TaskCard: React.FC<ITaskCardProps> = props => {
  // Destructuring props
  const {
    index,
    id,
    number,
    title,
    description,
    dateCreation,
    targetDate,
    priority
  } = props

  // Calculation days and hours in work
  const daysInWork = dayjs().diff(dateCreation, 'day')
  const hoursInWork = dayjs().diff(dateCreation, 'hour')
  const timeInWork = `${daysInWork} d ${hoursInWork - daysInWork * 24} h`

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={classes.root}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={classes.title}>#{number}</div>
          <div className={classes.title}>{title}</div>
          <div className={classes.decription}>{description}</div>
          <div>
            Date Creation: {dayjs(dateCreation).format('DD.MM.YYYY H:mm')}
          </div>
          <div>Target Date: {dayjs(targetDate).format('DD.MM.YYYY H:mm')}</div>
          <div>Day in work: {timeInWork}</div>
          <div>Priority: {priority}</div>
        </div>
      )}
    </Draggable>
  )
}
