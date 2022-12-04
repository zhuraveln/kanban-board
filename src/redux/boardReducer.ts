import { TaskItem } from '../components/Forms/FormCreateBoard/types'
import { BoardAction, BoardActionsTypes, BoardState } from './types'

const initialState: BoardState = {
  boards: [
    {
      id: 'lb57o0r4dnc2apyt1qe',
      name: 'test',
      columns: [
        {
          id: 'lbasdgvaw7h8ostgupotncl',
          name: 'Queue',
          tasks: [
            {
              description: 'description for task 1',
              id: 'lb57w721tstgupfdbfotncl',
              title: 'task in Queue'
            }
          ]
        },
        {
          id: 'lasvasv7w723tbostgupotncl',
          name: 'Development',
          tasks: [
            {
              description: 'description for task 1',
              id: 'lb57w7h8ostgsdvsdbotncl',
              title: 'task in Development'
            }
          ]
        },
        {
          id: 'lb57w7h8ostgupasvvaasvqwg1cl',
          name: 'Done',
          tasks: [
            {
              description: 'description for task 1',
              id: 'lb571ngf8ostgupotncl',
              title: 'task in Done'
            }
          ]
        }
      ]
    }
  ],
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
                ]
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
                        // Create new Task List
                        const newTasksList = [...column.tasks]
                        // Remove source Task in new Task list
                        newTasksList.splice(source.index, 1)
                        // Getting source task
                        const sourceTask = column.tasks[source.index]
                        // Moving source Task to new place
                        newTasksList.splice(destination.index, 0, sourceTask)

                        return {
                          ...column,
                          tasks: [...newTasksList] // Adding new Tasks list
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
                      // Find old column
                      if (String(index) === source.droppableId) {
                        // Create new source Task List
                        const newSourseTasksList = [...column.tasks]
                        // Remove source Task in new sourse Task list
                        newSourseTasksList.splice(source.index, 1)

                        return {
                          ...column,
                          tasks: [...newSourseTasksList] // Adding new sourse Tasks list
                        }
                        // Find new column
                      } else if (String(index) === destination?.droppableId) {
                        // Create new destination Task List
                        const newDestinationTasksList = [...column.tasks]
                        // Getting source task
                        const sourceTask =
                          board.columns[Number(source.droppableId)].tasks[
                            source.index
                          ]
                        // Moving source Task to new place
                        newDestinationTasksList.splice(
                          destination.index,
                          0,
                          sourceTask
                        )

                        return {
                          ...column,
                          tasks: [...newDestinationTasksList] // Adding new destination Tasks list
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
