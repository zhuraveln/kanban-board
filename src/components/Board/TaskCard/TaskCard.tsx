import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import dayjs from 'dayjs'

import { ITaskCardProps } from './typex'

import classes from './TaskCard.module.scss'

export const TaskCard: React.FC<ITaskCardProps> = props => {
  // Destructuring props
  const { index, id, number, title, description, dateCreation, targetDate } =
    props
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={classes.root}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={classes.title}>
            {title} №{number}
          </div>
          <div className={classes.decription}>{description}</div>
          <div>
            Date Creation: {dayjs(dateCreation).format('DD.MM.YYYY H:mm')}
          </div>
          <div>Target Date: {dayjs(targetDate).format('DD.MM.YYYY H:mm')}</div>
          <div>Day in work: {dayjs().diff(dateCreation, 'day')} d </div>
        </div>
      )}
    </Draggable>
  )
}
