import { immArr } from './immArr'
import { BoardItem } from '../components/Forms/FormCreateBoard/types'
import {
  BoardState,
  ChangeSubTaskStatusAction,
  CreateNewCommentAction,
  CreateNewSubTaskAction,
  CreateNewTaskAction,
  DeleteTaskAction,
  DeleteTaskFileURLAction,
  ReorderTasksOnDragDropAction,
  UpdateTaskAction
} from '../redux/board/types'

/** Class for immutable work with Board state */
export class immBoard {
  /** Return immutable Boards with a new Task */
  static createNewTask = (
    state: BoardState,
    action: CreateNewTaskAction
  ): BoardItem[] => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // current board index

    return [
      ...immArr.replace(boards, index, {
        ...boards[index],
        createdTasksCounter: boards[index].createdTasksCounter + 1, // increment createdTasksCounter for each Task create
        columns: [
          ...immArr.replace(boards[index].columns, 0, {
            ...boards[index].columns[0],
            tasks: [...boards[index].columns[0].tasks, action.payload]
          })
        ]
      })
    ]
  }

  /** Return immutable Boards with removed Task */
  static deleteTask = (
    state: BoardState,
    action: DeleteTaskAction
  ): BoardItem[] => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // current board index
    const indexCurrentColumn = Number(state.currentTask?.columnIndex) // current column index
    const indexCurrentTask = Number(state.currentTask?.index) // current column index

    return [
      ...immArr.replace(boards, index, {
        ...boards[index],
        columns: [
          ...immArr.replace(boards[index].columns, indexCurrentColumn, {
            ...boards[index].columns[indexCurrentColumn],
            tasks: [
              ...immArr.remove(
                boards[index].columns[indexCurrentColumn].tasks,
                indexCurrentTask
              )
            ]
          })
        ]
      })
    ]
  }

  /** Return immutable Boards with a new SubTask */
  static createNewSubTask = (
    state: BoardState,
    action: CreateNewSubTaskAction
  ): BoardItem[] => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // current board index
    const indexCurrentColumn = Number(state.currentTask?.columnIndex) // current column index
    const indexCurrentTask = Number(state.currentTask?.index) // current task index

    return [
      ...immArr.replace(boards, index, {
        ...boards[index],
        columns: [
          ...immArr.replace(boards[index].columns, indexCurrentColumn, {
            ...boards[index].columns[indexCurrentColumn],
            tasks: [
              ...immArr.replace(
                boards[index].columns[indexCurrentColumn].tasks,
                indexCurrentTask,
                {
                  ...boards[index].columns[indexCurrentColumn].tasks[
                    indexCurrentTask
                  ],
                  subtasks: [
                    ...boards[index].columns[indexCurrentColumn].tasks[
                      indexCurrentTask
                    ].subtasks,
                    action.payload
                  ]
                }
              )
            ]
          })
        ]
      })
    ]
  }

  /** Return immutable Boards with a new comment for Task */
  static createNewComment = (
    state: BoardState,
    action: CreateNewCommentAction
  ): BoardItem[] => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // current board index
    const indexCurrentColumn = Number(state.currentTask?.columnIndex) // current column index
    const indexCurrentTask = Number(state.currentTask?.index) // current task index

    return [
      ...immArr.replace(boards, index, {
        ...boards[index],
        columns: [
          ...immArr.replace(boards[index].columns, indexCurrentColumn, {
            ...boards[index].columns[indexCurrentColumn],
            tasks: [
              ...immArr.replace(
                boards[index].columns[indexCurrentColumn].tasks,
                indexCurrentTask,
                {
                  ...boards[index].columns[indexCurrentColumn].tasks[
                    indexCurrentTask
                  ],
                  comments: [
                    ...boards[index].columns[indexCurrentColumn].tasks[
                      indexCurrentTask
                    ].comments,
                    action.payload
                  ]
                }
              )
            ]
          })
        ]
      })
    ]
  }

  /** Return immutable Boards with new SubTask Status */
  static changeSubTaskStatus = (
    state: BoardState,
    action: ChangeSubTaskStatusAction
  ): BoardItem[] => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // current board index
    const indexCurrentColumn = Number(state.currentTask?.columnIndex) // current column index
    const indexCurrentTask = Number(state.currentTask?.index) // current task index
    const indexCurrentSubTask = action.payload.index // current subtask index

    return [
      ...immArr.replace(boards, index, {
        ...boards[index],
        columns: [
          ...immArr.replace(boards[index].columns, indexCurrentColumn, {
            ...boards[index].columns[indexCurrentColumn],
            tasks: [
              ...immArr.replace(
                boards[index].columns[indexCurrentColumn].tasks,
                indexCurrentTask,
                {
                  ...boards[index].columns[indexCurrentColumn].tasks[
                    indexCurrentTask
                  ],
                  subtasks: [
                    ...immArr.replace(
                      boards[index].columns[indexCurrentColumn].tasks[
                        indexCurrentTask
                      ].subtasks,
                      indexCurrentSubTask,
                      {
                        ...boards[index].columns[indexCurrentColumn].tasks[
                          indexCurrentTask
                        ].subtasks[indexCurrentSubTask],
                        isComplete: action.payload.isComplete
                      }
                    )
                  ]
                }
              )
            ]
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

  /** Return immutable Boards with deleted Task file URL */
  static deleteTaskFileURL = (
    state: BoardState,
    action: DeleteTaskFileURLAction
  ): BoardItem[] => {
    const boards = state.boards // Boards in state
    const index = Number(state.currentBoardIndex) // current Board index
    const indexTask = action.payload.index // current Task index

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
                {
                  ...boards[index].columns[action.payload.columnIndex].tasks[
                    indexTask
                  ],
                  file: null
                } // new updated task
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
                  source.index, // index to remove
                  destination.index, // index to insert
                  boards[index].columns[indexSourceColumn].tasks[source.index] // element to insert
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
