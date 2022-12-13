import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { dateFormat } from '../../../../utils'
import { TaskItem } from '../../../Forms/FormCreateBoard/types'

import { useAppDispatch } from '../../../../hooks'
import { setModalContent } from '../../../../redux/modal/actions'
import { setCurrentTask } from '../../../../redux/board/actions'

import { ModalContentTypes } from '../../../Modal/defineModalEl'

import classes from './TaskCard.module.scss'
import { priorityIcon } from '../../../../assets'

interface ITaskCard extends TaskItem {
  index: number // index of Task in array for drag and drop functional, and update functional in Redux
  columnIndex: number // index of Column for update task functional in Redux
}

export const TaskCard: React.FC<ITaskCard> = props => {
  const dispatch = useAppDispatch()

  const { index, id, number, title, priority, finishBy, subtasks, comments } =
    props // Task values

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
          {/* Header */}
          <div className={classes.header}>
            <h3 className={classes.title}>{title}</h3>
            <div className={classes.number}>#{number}</div>
          </div>

          {/* Body */}
          <div className={classes.body}>
            <p>
              Subtasks: ({subtasks.length}) Comments: ({comments.length})
            </p>
          </div>

          {/* Footer */}
          <div className={classes.footer}>
            <div className={classes.finishBy}>
              {finishBy
                ? `Finish before: ${dateFormat(finishBy)}`
                : 'Not finish date'}
            </div>
            <div className={classes.priority}>
              <img src={priorityIcon} alt='priority' />
              {priority}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}
