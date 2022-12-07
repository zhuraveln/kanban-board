import dayjs from 'dayjs'
import { PriorityTypes } from '../../components/Forms/FormCreateBoard/types'

export const testBoard = [
  {
    id: 'lb57o0r4dnc2apyt1qe',
    name: 'test',
    tasksCounter: 3,
    columns: [
      {
        id: 'lbasdgvaw7h8ostgupotncl',
        name: 'Queue',
        tasks: [
          {
            id: 'lb57w721tstgupfdbfotncl',
            number: 1,
            title: 'task in Queue',
            description: 'description for task 1',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.LOW,
            status: 'Queue',
            subtasks: []
          }
        ]
      },
      {
        id: 'lasvasv7w723tbostgupotncl',
        name: 'Development',
        tasks: [
          {
            id: 'lb57w7h8ostgsdvsdbotncl',
            title: 'task in Development',
            number: 2,
            description: 'description for task 1',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.MEDIUM,
            status: 'Development',
            subtasks: [
              {
                id: 'lb5dsv1ngf8ostgupjkcl',
                title: 'new subtask 1',
                isComplete: false
              },
              {
                id: 'lb2hsv1n8ostgupjkcl',
                title: 'new subtask 2',
                isComplete: false
              }
            ]
          }
        ]
      },
      {
        id: 'lb57w7h8ostgupasvvaasvqwg1cl',
        name: 'Done',
        tasks: [
          {
            id: 'lb571ngf8ostgupotncl',
            number: 3,
            title: 'task in Done',
            description: 'description for task 1',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.HIGH,
            status: 'Done',
            subtasks: []
          }
        ]
      }
    ]
  }
]

//----------------------------------------------------------------

// CREATE A NEW TASK

// return {
//   ...state,
//   boards: [
//     ...state.boards.map((board, index) => {
//       // Find current board
//       if (index === state.currentBoardIndex) {
//         return {
//           ...board,
//           columns: [
//             ...board.columns.map(column => {
//               // Find 'Queue' column
//               if (column.name === 'Queue') {
//                 return {
//                   ...column,
//                   tasks: [...column.tasks, action.payload] // Adding a new task
//                 }
//               } else {
//                 return column
//               }
//             })
//           ],
//           tasksCounter: board.tasksCounter + 1 // Increment tasksCounter for each Task create
//         }
//       } else {
//         return board
//       }
//     })
//   ]
// }

//----------------------------------------------------------------

// // REORDER TASKS BY DRAG AND DROP
// case BoardActionsTypes.REORDER_TASKS_ON_DRAG_DROP:
//   // Draggable location parameters from 'beautiful drag and drop'
//   const { source, destination } = action.payload

//   // Reorder tasks in current column
//   if (source.droppableId === destination?.droppableId) {
//     return {
//       ...state,
//       boards: [
//         ...state.boards.map((board, index) => {
//           // Find current board
//           if (index === state.currentBoardIndex) {
//             return {
//               ...board,
//               columns: [
//                 ...board.columns.map((column, index) => {
//                   // Find current column
//                   if (String(index) === source.droppableId) {
//                     // Create new Task List
//                     const newTasksList = [...column.tasks]
//                     // Remove source Task in new Task list
//                     newTasksList.splice(source.index, 1)
//                     // Getting source task
//                     const sourceTask = column.tasks[source.index]
//                     // Moving source Task to new place
//                     newTasksList.splice(destination.index, 0, sourceTask)

//                     return {
//                       ...column,
//                       tasks: [...newTasksList] // Adding new Tasks list
//                     }
//                   } else {
//                     return column
//                   }
//                 })
//               ]
//             }
//           } else {
//             return board
//           }
//         })
//       ]
//     }
//   }

//   // Reorder tasks in other column
//   if (source.droppableId !== destination?.droppableId) {
//     return {
//       ...state,
//       boards: [
//         ...state.boards.map((board, index) => {
//           // Find current board
//           if (index === state.currentBoardIndex) {
//             return {
//               ...board,
//               columns: [
//                 ...board.columns.map((column, index) => {
//                   // Find old column
//                   if (String(index) === source.droppableId) {
//                     // Create new source Task List
//                     const newSourseTasksList = [...column.tasks]
//                     // Remove source Task in new sourse Task list
//                     newSourseTasksList.splice(source.index, 1)

//                     return {
//                       ...column,
//                       tasks: [...newSourseTasksList] // Adding new sourse Tasks list
//                     }
//                     // Find new column
//                   } else if (String(index) === destination?.droppableId) {
//                     // Create new destination Task List
//                     const newDestinationTasksList = [...column.tasks]
//                     // Getting source task
//                     const sourceTask =
//                       board.columns[Number(source.droppableId)].tasks[
//                         source.index
//                       ]
//                     // Moving source Task to new place
//                     newDestinationTasksList.splice(
//                       destination.index,
//                       0,
//                       sourceTask
//                     )

//                     return {
//                       ...column,
//                       tasks: [...newDestinationTasksList] // Adding new destination Tasks list
//                     }
//                   } else {
//                     return column
//                   }
//                 })
//               ]
//             }
//           } else {
//             return board
//           }
//         })
//       ]
//     }
//   }

//   return state
