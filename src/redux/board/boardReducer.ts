import { immBoard } from '../../utils/immBoard'
import { startBoards } from '../../assets/startBoards'

import { BoardAction, BoardActionsTypes, BoardState } from './types'

const initialState: BoardState = {
  boards: startBoards,
  currentBoardIndex: 0,
  currentTask: null
}

export const boardReducer = (
  state = initialState,
  action: BoardAction
): BoardState => {
  switch (action.type) {
    //----------------------------------------------------------------

    // CREATE A NEW BOARD
    case BoardActionsTypes.CREATE_NEW_BOARD:
      return { ...state, boards: [...state.boards, action.payload] }

    //----------------------------------------------------------------

    // CREATE A NEW TASK
    case BoardActionsTypes.CREATE_NEW_TASK:
      return { ...state, boards: [...immBoard.createNewTask(state, action)] }

    //----------------------------------------------------------------

    // CREATE A NEW SUBTASK
    case BoardActionsTypes.CREATE_NEW_SUBTASK:
      return { ...state, boards: [...immBoard.createNewSubTask(state, action)] }

    //----------------------------------------------------------------

    // CREATE A NEW COMMENT FOR TASK
    case BoardActionsTypes.CREATE_NEW_COMMENT:
      return { ...state, boards: [...immBoard.createNewComment(state, action)] }

    //----------------------------------------------------------------

    // CHANGE SUBTASK STATUS
    case BoardActionsTypes.CHANGE_SUBTASK_STATUS:
      return {
        ...state,
        boards: [...immBoard.changeSubTaskStatus(state, action)]
      }

    //----------------------------------------------------------------

    // UPDATE BOARD
    case BoardActionsTypes.UPDATE_BOARD:
      return { ...state, boards: [...immBoard.updateBoard(state, action)] }

    //----------------------------------------------------------------

    // UPDATE TASK
    case BoardActionsTypes.UPDATE_TASK:
      return { ...state, boards: [...immBoard.updateTask(state, action)] }

    //----------------------------------------------------------------

    // DELETE BOARD
    case BoardActionsTypes.DELETE_BOARD:
      return {
        ...state,
        boards: [...immBoard.deleteBoard(state, action)]
      }

    //----------------------------------------------------------------

    // DELETE TASK
    case BoardActionsTypes.DELETE_TASK:
      return {
        ...state,
        boards: [...immBoard.deleteTask(state, action)]
      }

    //----------------------------------------------------------------

    // DELETE SUBTASK
    case BoardActionsTypes.DELETE_SUBTASK:
      return {
        ...state,
        boards: [...immBoard.deleteSubTask(state, action)]
      }

    //----------------------------------------------------------------

    // DELETE TASK FILE URL
    case BoardActionsTypes.DELETE_TASK_FILE_URL:
      return {
        ...state,
        boards: [...immBoard.deleteTaskFileURL(state, action)]
      }

    //----------------------------------------------------------------

    // SET CURRENT BOARD INDEX
    case BoardActionsTypes.SET_CURRENT_BOARD_INDEX:
      return { ...state, currentBoardIndex: action.payload }

    //----------------------------------------------------------------

    // SET CURRENT TASK
    case BoardActionsTypes.SET_CURRENT_TASK:
      return { ...state, currentTask: action.payload }

    //----------------------------------------------------------------

    // REORDER TASKS BY DRAG AND DROP
    case BoardActionsTypes.REORDER_TASKS_ON_DRAG_DROP:
      return { ...state, boards: [...immBoard.reorderTask(state, action)] }

    //----------------------------------------------------------------

    default:
      return state
  }
}
