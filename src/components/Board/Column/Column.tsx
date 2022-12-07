import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { TaskCard } from '../..'

import { IColumnProps } from './types'

import classes from './Column.module.scss'

export const Column: React.FC<IColumnProps> = props => {
  // Destructuring props
  const { index, name, tasks } = props
  const columnIndex = index
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
              <TaskCard
                {...task}
                index={index}
                columnIndex={columnIndex}
                key={task.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
