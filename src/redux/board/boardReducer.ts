import { immBoard } from '../../utils/immBoard'
import { testBoard } from './test'

import { BoardAction, BoardActionsTypes, BoardState } from './types'

const initialState: BoardState = {
  boards: testBoard,
  currentBoardIndex: 0
}

export const boardReducer = (
  state = initialState,
  action: BoardAction
): BoardState => {
  switch (action.type) {
    //----------------------------------------------------------------

    // CREACTE A NEW BOARD
    case BoardActionsTypes.CREATE_NEW_BOARD:
      return { ...state, boards: [...state.boards, action.payload] }

    //----------------------------------------------------------------

    // SET CURRENT BOARD INDEX
    case BoardActionsTypes.SET_CURRENT_BOARD_INDEX:
      return { ...state, currentBoardIndex: action.payload }

    //----------------------------------------------------------------

    // CREATE A NEW TASK
    case BoardActionsTypes.CREATE_NEW_TASK:
      return { ...state, boards: [...immBoard.createNewTask(state, action)] }

    //----------------------------------------------------------------

    // REORDER TASKS BY DRAG AND DROP
    case BoardActionsTypes.REORDER_TASKS_ON_DRAG_DROP:
      return { ...state, boards: [...immBoard.reorderTask(state, action)] }

    //----------------------------------------------------------------

    default:
      return state
  }
}
