import dayjs from 'dayjs'
import {
  BoardItem,
  PriorityTypes
} from '../../components/Forms/FormCreateBoard/types'

export const testBoards2 = [
  {
    id: 'lb57o0r4dnc2apyt1qe',
    name: 'Magic project 🔮',
    createdTasksCounter: 14,
    columns: [
      {
        id: 'lbasdgvaw7h8ostgupotncl',
        name: 'Queue',
        tasks: [
          {
            id: 'lbnrao8gunqq5qq281',
            index: 0,
            columnIndex: 0,
            number: 11,
            title: 'Learn new libraries',
            description: null,
            createdAt: dayjs('2022-12-14T14:37:01.360Z', 'DD.MM.YYYY H:mm'),
            finishBy: dayjs('2023-01-13T05:40', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.HIGH,
            status: 'LOW',
            file: null,
            comments: [
              {
                id: 'lbnrewe2sxxm25guqki',
                parentId: null,
                body: 'I already know everything 🥳',
                createdAt: dayjs('2022-12-14T14:40:18.554Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbnrfvil6xake8ah1u9',
                parentId: 'lbnrewe2sxxm25guqki',
                body: 'Except React...',
                createdAt: dayjs('2022-12-14T14:41:04.077Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbnrgnnrh7ia99rooho',
                parentId: 'lbnrfvil6xake8ah1u9',
                body: 'And JavaScript...😵‍💫',
                createdAt: dayjs('2022-12-14T14:41:40.551Z', 'DD.MM.YYYY H:mm')
              }
            ],
            subtasks: [
              {
                id: 'lbnrd2lo0fv7hkysa5qj',
                title: 'Intersection observer',
                isComplete: false,
                createdAt: dayjs('2022-12-14T14:38:53.292Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbnrdlxqwdcen529hus',
                title: 'React flip toolkit',
                isComplete: false,
                createdAt: dayjs('2022-12-14T14:39:18.351Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbnrhz57y4so40u3g0p',
                title: 'React Hook Form',
                isComplete: false,
                createdAt: dayjs('2022-12-14T14:42:42.091Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbnrjmpmqd7bbfjm54s',
                title: 'styled components',
                isComplete: false,
                createdAt: dayjs('2022-12-14T14:43:59.290Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbnrk7h9unuwgfrced8',
                title: 'React Helmet',
                isComplete: false,
                createdAt: dayjs('2022-12-14T14:44:26.205Z', 'DD.MM.YYYY H:mm')
              }
            ]
          },
          {
            id: 'lbnra8dugolnd6u13nt',
            index: 1,
            columnIndex: 0,
            number: 10,
            title: 'Learn new framework',
            description: null,
            createdAt: dayjs('2022-12-14T14:36:40.818Z', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.MEDIUM,
            status: 'LOW',
            file: null,
            comments: [
              {
                id: 'lbnrqpjdkclewh6rk9',
                parentId: null,
                body: 'I choose Nuxt.js 😶‍🌫️',
                createdAt: dayjs('2022-12-14T14:49:29.545Z', 'DD.MM.YYYY H:mm')
              }
            ],
            subtasks: [
              {
                id: 'lbnrb8zjhhz1m2sap2l',
                title: 'Next.js',
                isComplete: false,
                createdAt: dayjs('2022-12-14T14:37:28.255Z', 'DD.MM.YYYY H:mm')
              }
            ]
          }
        ]
      },
      {
        id: 'lasvasv7w723tbostgupotncl',
        name: 'Development',
        tasks: [
          {
            id: 'lb57w721tstgupfdbfotncl',
            index: 0,
            columnIndex: 1,
            number: 1,
            title: 'Create new magic',
            description:
              "New magic must be in holy school of magic. You can only use improvised means and not resort to the help of senior comrades. Good luck! The whole world is counting on you! Let me know when you're ready to show your work!",
            createdAt: dayjs('2022-12-01T15:00:00.000Z', 'DD.MM.YYYY H:mm'),
            finishBy: dayjs('2022-12-31T11:30', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.HIGH,
            status: 'HIGH',
            file: null,
            comments: [
              {
                id: 'lbno1jke2oy3vu2wqvo',
                parentId: null,
                body: "How can I do magic if I'm an avocado?",
                createdAt: dayjs('2022-12-14T13:05:56.558Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbno2c9p035qx55e8y0p',
                parentId: 'lbno1jke2oy3vu2wqvo',
                body: 'There is nothing impossible, I will try!',
                createdAt: dayjs('2022-12-14T13:06:33.757Z', 'DD.MM.YYYY H:mm')
              }
            ],
            subtasks: [
              {
                id: 'lbno3stpmr2w4bc2txm',
                title: 'Watch tutorial on youtube',
                isComplete: false,
                createdAt: dayjs('2022-12-14T13:07:41.869Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbno7b7niczsc7h4sgj',
                title: 'do something...',
                isComplete: true,
                createdAt: dayjs('2022-12-14T13:10:25.667Z', 'DD.MM.YYYY H:mm')
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
            id: 'lbnrzl0m558m23auvew',
            number: 14,
            title: 'Watch an interesting movies',
            description: 'Choose any and watch them',
            createdAt: dayjs('2022-12-14T14:56:23.590Z', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.LOW,
            status: 'LOW',
            file: null,
            comments: [
              {
                id: 'lbns0mh2s0any4ghfq',
                parentId: null,
                body: '*&@*($^*!%*$@^',
                createdAt: dayjs('2022-12-14T14:57:12.134Z', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lbns0qy9zn4zmgxmiv',
                parentId: 'lbns0mh2s0any4ghfq',
                body: 'How to delete a comment?!',
                createdAt: dayjs('2022-12-14T14:57:17.937Z', 'DD.MM.YYYY H:mm')
              }
            ],
            subtasks: [
              {
                id: 'lbns1qpwym26k8a0zpa',
                title: 'Mr. Nobody',
                isComplete: false,
                createdAt: dayjs('2022-12-14T14:58:04.292Z', 'DD.MM.YYYY H:mm')
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'lbnqyu0kzmne5xzmlq',
    name: 'Road to dream!⚡️',
    createdTasksCounter: 1,
    columns: [
      {
        id: 'lbnqyu0kmrajuimu9l',
        name: 'Queue',
        tasks: [
          {
            id: 'lbnqyy9b4qanlha0qxa',
            index: 0,
            columnIndex: 0,
            number: 1,
            title: 'Build your own road',
            description:
              'Nothing is impossible! I wish you good luck my dear friend!',
            createdAt: dayjs('2022-12-14T14:27:54.479Z', 'DD.MM.YYYY H:mm'),
            finishBy: dayjs('2022-12-31T11:59', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.HIGH,
            status: 'HIGH',
            file: null,
            comments: [
              {
                id: 'lbnqziy2ib9xu7y4dni',
                parentId: null,
                body: "I think you'll succeed!",
                createdAt: dayjs('2022-12-14T14:28:21.290Z', 'DD.MM.YYYY H:mm')
              }
            ],
            subtasks: []
          }
        ]
      },
      {
        id: 'lbnqyu0kxgnft7j5g4',
        name: 'Development',
        tasks: []
      },
      {
        id: 'lbnqyu0k2p1lbr8204k',
        name: 'Done',
        tasks: []
      }
    ]
  }
] as BoardItem[]

export const testBoards = [
  {
    id: 'lb57o0r4dnc2apyt1qe',
    name: 'test',
    createdTasksCounter: 3,
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
            createdAt: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            finishBy: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.LOW,
            status: 'Queue',
            file: null,
            comments: [],
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
            createdAt: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            finishBy: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.MEDIUM,
            status: 'Development',
            file: null,
            comments: [
              {
                id: 'b57w7',
                body: 'first comment',
                parentId: null,
                createdAt: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm')
              }
            ],
            subtasks: [
              {
                id: 'lb5dupjkcl',
                title: 'new subtask 1',
                isComplete: false,
                createdAt: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm')
              },
              {
                id: 'lb2hsv1n8ostgupjkcl',
                title: 'new subtask 2',
                isComplete: false,
                createdAt: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm')
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
            createdAt: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            finishBy: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.HIGH,
            status: 'Done',
            file: null,
            comments: [
              {
                id: 'sdjykmytghm',
                body: 'comment',
                parentId: null,
                createdAt: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm')
              }
            ],
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
//           createdTasksCounter: board.createdTasksCounter + 1 // Increment createdTasksCounter for each Task create
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
