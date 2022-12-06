import { RootState } from '../store'

/** Selector for getting all boards from state */
export const boardsSelector = (state: RootState) => state.board

/** Selector for getting current board from state */
export const currentBoardSelector = () => (state: RootState) =>
  state.board.boards[Number(state.board.currentBoardIndex)]

/** Selector for getting tasks counter in current board from state */
export const tasksCounterSelector = () => (state: RootState) =>
  state.board.boards[Number(state.board.currentBoardIndex)]
