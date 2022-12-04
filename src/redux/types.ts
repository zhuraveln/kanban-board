import { DropResult } from 'react-beautiful-dnd'
import { BoardItem, TaskItem } from '../components/Forms/FormCreateBoard/types'

// Interface for Board State
export interface BoardState {
  boards: BoardItem[]
  currentBoardIndex: null | number
}

// Board Actions Types
export enum BoardActionsTypes {
  CREATE_NEW_BOARD = 'CREATE_NEW_BOARD',
  SET_CURRENT_BOARD_INDEX = 'SET_CURRENT_BOARD_INDEX',
  CREATE_NEW_TASK = 'CREATE_NEW_TASK',
  REORDER_TASKS_ON_DRAG_DROP = 'REORDER_TASKS_ON_DRAG_DROP'
}

// Types for Board Actions
export type BoardAction =
  | CreateNewBoardAction
  | SetcurrentBoardIndexAction
  | CreateNewTaskAction
  | ReorderTasksOnDragDropAction

// Interface for Create a new Board Action
export interface CreateNewBoardAction {
  type: BoardActionsTypes.CREATE_NEW_BOARD
  payload: BoardItem
}

// Interface for Set Current Board Index Action
export interface SetcurrentBoardIndexAction {
  type: BoardActionsTypes.SET_CURRENT_BOARD_INDEX
  payload: BoardState['currentBoardIndex']
}

// Interface for Create a new Task Action
export interface CreateNewTaskAction {
  type: BoardActionsTypes.CREATE_NEW_TASK
  payload: TaskItem
}

// Interface for Reorder Tasks by Drag and Drop Action
export interface ReorderTasksOnDragDropAction {
  type: BoardActionsTypes.REORDER_TASKS_ON_DRAG_DROP
  payload: DropResult
}
