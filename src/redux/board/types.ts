import { DropResult } from 'react-beautiful-dnd'
import {
  BoardItem,
  TaskItem
} from '../../components/Forms/FormCreateBoard/types'

// Interface for Board state
export interface BoardState {
  boards: BoardItem[]
  currentBoardIndex: null | number
  currentTask: null | CurrentTaskItem
}

export type CurrentTaskItem = TaskItem & {
  index: number
  columnIndex: number
}

// Board Actions types
export enum BoardActionsTypes {
  CREATE_NEW_BOARD = 'CREATE_NEW_BOARD',
  CREATE_NEW_TASK = 'CREATE_NEW_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
  SET_CURRENT_BOARD_INDEX = 'SET_CURRENT_BOARD_INDEX',
  SET_CURRENT_TASK = 'SET_CURRENT_TASK',
  REORDER_TASKS_ON_DRAG_DROP = 'REORDER_TASKS_ON_DRAG_DROP'
}

// Types for Board Actions
export type BoardAction =
  | CreateNewBoardAction
  | CreateNewTaskAction
  | UpdateTaskAction
  | SetCurrentBoardIndexAction
  | SetCurrentTaskAction
  | ReorderTasksOnDragDropAction

// Interface for create a new Board Action
export interface CreateNewBoardAction {
  type: BoardActionsTypes.CREATE_NEW_BOARD
  payload: BoardItem
}

// Interface for create a new Task Action
export interface CreateNewTaskAction {
  type: BoardActionsTypes.CREATE_NEW_TASK
  payload: TaskItem
}

// Interface for update Task Action
export interface UpdateTaskAction {
  type: BoardActionsTypes.UPDATE_TASK
  payload: CurrentTaskItem
}

// Interface for set current Board index Action
export interface SetCurrentBoardIndexAction {
  type: BoardActionsTypes.SET_CURRENT_BOARD_INDEX
  payload: BoardState['currentBoardIndex']
}

// Interface for set current Task
export interface SetCurrentTaskAction {
  type: BoardActionsTypes.SET_CURRENT_TASK
  payload: CurrentTaskItem
}

// Interface for reorder Tasks by Drag and Drop Action
export interface ReorderTasksOnDragDropAction {
  type: BoardActionsTypes.REORDER_TASKS_ON_DRAG_DROP
  payload: DropResult
}
