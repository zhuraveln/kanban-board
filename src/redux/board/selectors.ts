import { RootState } from '../store'

/** Selector for getting all boards from state */
export const boardsSelector = (state: RootState) => state.board

/** Selector for getting current board from state */
export const currentBoardSelector = () => (state: RootState) =>
  state.board.boards[Number(state.board.currentBoardIndex)]

/** Selector for getting tasks counter in current board from state */
export const createdTasksCounterSelector = () => (state: RootState) =>
  state.board.boards[Number(state.board.currentBoardIndex)]

/** Selector for getting current task from state */
export const currentTaskSelector = () => (state: RootState) =>
  state.board.currentTask

/** Selector for getting task from state */
export const getTaskSelector = () => (state: RootState) =>
  state.board.boards[Number(state.board.currentBoardIndex)].columns[
    Number(state.board.currentTask?.columnIndex)
  ].tasks[Number(state.board.currentTask?.index)]

/** Selector for getting subtask by index from state */
export const getSubTaskSelector = (index: number) => (state: RootState) =>
  state.board.boards[Number(state.board.currentBoardIndex)].columns[
    Number(state.board.currentTask?.columnIndex)
  ].tasks[Number(state.board.currentTask?.index)].subtasks[index]
