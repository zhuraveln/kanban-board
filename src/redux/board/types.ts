import { DropResult } from 'react-beautiful-dnd'
import {
  BoardItem,
  CommentItem,
  SubTaskItem,
  TaskItem
} from '../../components/Forms/FormCreateBoard/types'

// Interface for Board state
export interface BoardState {
  boards: BoardItem[]
  currentBoardIndex: number | null
  currentTask: CurrentTaskItem | null
}

export type CurrentTaskItem = TaskItem & {
  index: number
  columnIndex: number
}

// Board Actions types
export enum BoardActionsTypes {
  CREATE_NEW_BOARD = 'CREATE_NEW_BOARD',
  CREATE_NEW_TASK = 'CREATE_NEW_TASK',
  CREATE_NEW_SUBTASK = 'CREATE_NEW_SUBTASK',
  CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT',
  CHANGE_SUBTASK_STATUS = 'CHANGE_SUBTASK_STATUS',
  UPDATE_BOARD = 'UPDATE_BOARD',
  UPDATE_TASK = 'UPDATE_TASK',
  DELETE_BOARD = 'DELETE_BOARD',
  DELETE_TASK = 'DELETE_TASK',
  DELETE_SUBTASK = 'DELETE_SUBTASK',
  DELETE_TASK_FILE_URL = 'DELETE_TASK_FILE_URL',
  SET_CURRENT_BOARD_INDEX = 'SET_CURRENT_BOARD_INDEX',
  SET_CURRENT_TASK = 'SET_CURRENT_TASK',
  REORDER_TASKS_ON_DRAG_DROP = 'REORDER_TASKS_ON_DRAG_DROP'
}

// Types for Board Actions
export type BoardAction =
  | CreateNewBoardAction
  | CreateNewTaskAction
  | CreateNewSubTaskAction
  | CreateNewCommentAction
  | ChangeSubTaskStatusAction
  | UpdateBoardAction
  | UpdateTaskAction
  | DeleteBoardAction
  | DeleteTaskAction
  | DeleteSubTaskAction
  | DeleteTaskFileURLAction
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

// Interface for create a new SubTask Action
export interface CreateNewSubTaskAction {
  type: BoardActionsTypes.CREATE_NEW_SUBTASK
  payload: SubTaskItem
}

// Interface for create a new Comment for Task Action
export interface CreateNewCommentAction {
  type: BoardActionsTypes.CREATE_NEW_COMMENT
  payload: CommentItem
}

// Interface for change SubTask status Action
export interface ChangeSubTaskStatusAction {
  type: BoardActionsTypes.CHANGE_SUBTASK_STATUS
  payload: { isComplete: boolean; index: number }
}

// Interface for update Board Action
export interface UpdateBoardAction {
  type: BoardActionsTypes.UPDATE_BOARD
  payload: BoardItem
}

// Interface for update Task Action
export interface UpdateTaskAction {
  type: BoardActionsTypes.UPDATE_TASK
  payload: CurrentTaskItem
}

// Interface for delete Board Action
export interface DeleteBoardAction {
  type: BoardActionsTypes.DELETE_BOARD
}

// Interface for delete Task Action
export interface DeleteTaskAction {
  type: BoardActionsTypes.DELETE_TASK
}

// Interface for delete SubTask Action
export interface DeleteSubTaskAction {
  type: BoardActionsTypes.DELETE_SUBTASK
  payload: number
}

// Interface for delete Task file URL Action
export interface DeleteTaskFileURLAction {
  type: BoardActionsTypes.DELETE_TASK_FILE_URL
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
