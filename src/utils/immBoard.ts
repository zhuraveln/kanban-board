import { immArr } from './immArr'
import {
  BoardState,
  CreateNewTaskAction,
  ReorderTasksOnDragDropAction,
  UpdateTaskAction
} from '../redux/board/types'
import { BoardItem } from '../components/Forms/FormCreateBoard/types'

/** Custom class for immutable work with Board state */
export class immBoard {
  /** Return immutable Boards with new Task */
  static createNewTask = (
    state: BoardState,
    action: CreateNewTaskAction
  ): BoardItem[] => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // current board index

    return [
      ...immArr.replace(boards, index, {
        ...boards[index],
        tasksCounter: boards[index].tasksCounter + 1, // increment tasksCounter for each Task create
        columns: [
          ...immArr.replace(boards[index].columns, 0, {
            ...boards[index].columns[0],
            tasks: [...boards[index].columns[0].tasks, action.payload]
          })
        ]
      })
    ]
  }

  /** Return immutable Boards with updated Task */
  static updateTask = (
    state: BoardState,
    action: UpdateTaskAction
  ): BoardItem[] => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // current Board index

    return [
      ...immArr.replace(boards, index, {
        ...boards[index],
        columns: [
          // array of columns and index of column for replace
          ...immArr.replace(boards[index].columns, action.payload.columnIndex, {
            // updated column
            ...boards[index].columns[action.payload.columnIndex],
            tasks: [
              ...immArr.replace(
                boards[index].columns[action.payload.columnIndex].tasks, // array of tasks
                action.payload.index, // index of task for replace
                action.payload // new updated task
              )
            ]
          })
        ]
      })
    ]
  }

  /** Return immutable Boards with reordered tasks */
  static reorderTask = (
    state: BoardState,
    action: ReorderTasksOnDragDropAction
  ): BoardItem[] => {
    // Draggable location parameters from 'beautiful drag and drop'
    const { source, destination } = action.payload

    // Reorder tasks in current column
    if (source.droppableId === destination?.droppableId) {
      const boards = state.boards // Boards in state
      const index = Number(state.currentBoardIndex) // current Board index
      const indexSourceColumn = Number(source.droppableId) // source column index

      return [
        ...immArr.replace(boards, index, {
          ...boards[index],
          columns: [
            ...immArr.replace(boards[index].columns, indexSourceColumn, {
              ...boards[index].columns[indexSourceColumn],
              tasks: [
                ...immArr.swap(
                  boards[index].columns[indexSourceColumn].tasks, // array of Tasks
                  source.index, // index for remove
                  destination.index, // index for insert
                  boards[index].columns[indexSourceColumn].tasks[source.index] // element for insert
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
