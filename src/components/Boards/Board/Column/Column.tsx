import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { TaskCard } from '../../..'
import { ColumnItem } from '../../../Forms/FormCreateBoard/types'

import classes from './Column.module.scss'

interface IColumn extends ColumnItem {
  index: number
}

export const Column: React.FC<IColumn> = props => {
  const { index, name, tasks } = props // column values
  const columnIndex = index // need for TaskCard

  return (
    <div className={classes.root}>
      {/* Column name, tasks counter */}
      <h2 className={classes.title}>
        {name} ({tasks.length})
      </h2>
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
