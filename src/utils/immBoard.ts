import { immArr } from './immArr'
import {
  BoardState,
  CreateNewTaskAction,
  ReorderTasksOnDragDropAction
} from '../redux/board/types'

/** Custom class for immutable work with Board state */
export class immBoard {
  /** Return immutable Boards with new Task */
  static createNewTask = (state: BoardState, action: CreateNewTaskAction) => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // Current board index

    return [
      ...immArr.replace(boards, index, {
        ...boards[index],
        tasksCounter: boards[index].tasksCounter + 1, // Increment tasksCounter for each Task create
        columns: [
          ...immArr.replace(boards[index].columns, 0, {
            ...boards[index].columns[0],
            tasks: [...boards[index].columns[0].tasks, action.payload]
          })
        ]
      })
    ]
  }

  /** Return immutable Boards with reordered tasks */
  static reorderTask = (
    state: BoardState,
    action: ReorderTasksOnDragDropAction
  ) => {
    // Draggable location parameters from 'beautiful drag and drop'
    const { source, destination } = action.payload

    // Reorder tasks in current column
    if (source.droppableId === destination?.droppableId) {
      const boards = state.boards // Boards
      const index = Number(state.currentBoardIndex) // Current Board index
      const indexSourceColumn = Number(source.droppableId) // Source column index

      return [
        ...immArr.replace(boards, index, {
          ...boards[index],
          columns: [
            ...immArr.replace(boards[index].columns, indexSourceColumn, {
              ...boards[index].columns[indexSourceColumn],
              tasks: [
                ...immArr.swap(
                  boards[index].columns[indexSourceColumn].tasks, // Array of Tasks
                  source.index, // Index for remove
                  destination.index, // Index for insert
                  boards[index].columns[indexSourceColumn].tasks[source.index] // Value for insert
                )
              ]
            })
          ]
        })
      ]
    }

    // Reorder tasks in other column
    if (source.droppableId !== destination?.droppableId) {
      return [
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
                          status: column.name // Change Task status
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

    return [...state.boards]
  }
}
