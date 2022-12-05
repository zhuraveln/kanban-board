import { immArr } from '../utils/immArr'
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
    //----------------------------------------------------------------

    // CREACTE A NEW BOARD
    case BoardActionsTypes.CREATE_NEW_BOARD:
      return { ...state, boards: [...state.boards, action.payload] }

    //----------------------------------------------------------------
    //----------------------------------------------------------------

    // SET CURRENT BOARD INDEX
    case BoardActionsTypes.SET_CURRENT_BOARD_INDEX:
      return { ...state, currentBoardIndex: action.payload }

    //----------------------------------------------------------------
    //----------------------------------------------------------------

    // CREATE A NEW TASK
    case BoardActionsTypes.CREATE_NEW_TASK:
      return {
        ...state,
        boards: [
          ...state.boards.map((board, index) => {
            // Find current board
            if (index === state.currentBoardIndex) {
              return {
                ...board,
                columns: [
                  ...board.columns.map(column => {
                    // Find 'Queue' column
                    if (column.name === 'Queue') {
                      return {
                        ...column,
                        tasks: [...column.tasks, action.payload] // Adding a new task
                      }
                    } else {
                      return column
                    }
                  })
                ],
                tasksCounter: board.tasksCounter + 1 // Increment tasksCounter for each Task create
              }
            } else {
              return board
            }
          })
        ]
      }

    //----------------------------------------------------------------
    //----------------------------------------------------------------

    // REORDER TASKS BY DRAG AND DROP
    case BoardActionsTypes.REORDER_TASKS_ON_DRAG_DROP:
      // Draggable location parameters from 'beautiful drag and drop'
      const { source, destination } = action.payload

      // Reorder tasks in current column
      if (source.droppableId === destination?.droppableId) {
        return {
          ...state,
          boards: [
            ...state.boards.map((board, index) => {
              // Find current board
              if (index === state.currentBoardIndex) {
                return {
                  ...board,
                  columns: [
                    ...board.columns.map((column, index) => {
                      // Find current column
                      if (String(index) === source.droppableId) {
                        return {
                          ...column,
                          tasks: [
                            ...immArr.changePositions(
                              column.tasks, // Array of Tasks
                              source.index, // Index for remove
                              destination.index, // Index for insert
                              column.tasks[source.index] // Value for insert
                            )
                          ]
                        }
                      } else {
                        return column
                      }
                    })
                  ]
                }
              } else {
                return board
              }
            })
          ]
        }
      }

      // Reorder tasks in other column
      if (source.droppableId !== destination?.droppableId) {
        return {
          ...state,
          boards: [
            ...state.boards.map((board, index) => {
              // Find current board
              if (index === state.currentBoardIndex) {
                return {
                  ...board,
                  columns: [
                    ...board.columns.map((column, index) => {
                      // Remove source Task in source column
                      if (String(index) === source.droppableId) {
                        return {
                          ...column,
                          tasks: [...immArr.remove(column.tasks, source.index)]
                        }

                        // Adding source Task to destination column
                      } else if (String(index) === destination?.droppableId) {
                        // Getting source task
                        const sourceTask =
                          board.columns[Number(source.droppableId)].tasks[
                            source.index
                          ]

                        // Adding new destination Tasks list and change Task status
                        return {
                          ...column,
                          tasks: [
                            ...immArr.insert(column.tasks, destination.index, {
                              ...sourceTask,
                              status: column.name
                            })
                          ]
                        }
                      } else {
                        return column
                      }
                    })
                  ]
                }
              } else {
                return board
              }
            })
          ]
        }
      }

      return state

    //----------------------------------------------------------------

    default:
      return state
  }
}
