import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { IProjectTaskCardProps } from './typex'

import classes from './ProjectTaskCard.module.scss'

export const ProjectTaskCard: React.FC<IProjectTaskCardProps> = ({
  index,
  id,
  title,
  description
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={classes.root}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={classes.title}>{title}</div>
          <div className={classes.decription}>{description}</div>
        </div>
      )}
    </Draggable>
  )
}
