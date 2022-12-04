import { DropResult } from 'react-beautiful-dnd'
import { BoardItem, TaskItem } from '../components/Forms/FormCreateBoard/types'

import {
  CreateNewBoardAction,
  CreateNewTaskAction,
  BoardActionsTypes,
  ReorderTasksOnDragDropAction,
  SetcurrentBoardIndexAction,
  BoardState
} from './types'

// Action for create a new board
export const createNewBoard = (payload: BoardItem): CreateNewBoardAction => ({
  type: BoardActionsTypes.CREATE_NEW_BOARD,
  payload
})

// Action for set Current Board index
export const setcurrentBoardIndex = (
  payload: BoardState['currentBoardIndex']
): SetcurrentBoardIndexAction => ({
  type: BoardActionsTypes.SET_CURRENT_BOARD_INDEX,
  payload
})

// Action for create a new task
export const createNewTask = (payload: TaskItem): CreateNewTaskAction => ({
  type: BoardActionsTypes.CREATE_NEW_TASK,
  payload
})

// Action for reorder tasks by Drag and drop
export const reorderTasksOnDragDrop = (
  payload: DropResult
): ReorderTasksOnDragDropAction => ({
  type: BoardActionsTypes.REORDER_TASKS_ON_DRAG_DROP,
  payload
})
