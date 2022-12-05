import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { TaskCard } from '../TaskCard/TaskCard'
import { IColumnProps } from './types'

import classes from './Column.module.scss'

export const Column: React.FC<IColumnProps> = props => {
  // Destructuring props
  const { index, name, tasks } = props
  return (
    <div className={classes.container}>
      {/* Column name */}
      <h2>{name}</h2>
      <Droppable droppableId={String(index)}>
        {provided => (
          <div
            className={classes.tasksList}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks?.map((task, index) => (
              <TaskCard {...task} index={index} key={task.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
