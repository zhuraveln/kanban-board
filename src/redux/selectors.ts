import { RootState } from './rootReducer'

/** Selector for getting all boards from state */
export const boardsSelector = (state: RootState) => state.boards

/** Selector for getting current board by 'currentBoardIndex' from state */
export const boardSelector = () => (state: RootState) =>
  state.boards.boards[Number(state.boards.currentBoardIndex)]
