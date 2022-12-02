import { ProjectAction, ProjectActionsTypes, ProjectState } from './types'

const initialState: ProjectState = {
  projects: [
    {
      projectId: 'lb57o0r4dnc2apyt1qe',
      projectName: 'test',
      boards: [
        {
          id: 'lb57w7h8ostgupotncl',
          boardName: 'Queue',
          tasks: []
        },
        {
          id: 'lb57w723tbostgupotncl',
          boardName: 'Development',
          tasks: []
        },
        {
          id: 'lb57w7h8ostgupsdv1cl',
          boardName: 'Done',
          tasks: []
        }
      ]
    }
  ]
}
// as ProjectItem[]

export const projectReducer = (
  state = initialState,
  action: ProjectAction
): ProjectState => {
  switch (action.type) {
    case ProjectActionsTypes.CREATE_NEW_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] }

    case ProjectActionsTypes.CREATE_NEW_TASK:
      const findProject = state.projects.find(
        project => project.projectId === action.payload.projectId
      )

      findProject?.boards[0].tasks.push(action.payload)

      return state

    case ProjectActionsTypes.DRAG_HAPPENED:
      const {
        projectId,
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload

      // In current board
      if (droppableIdStart === droppableIdEnd) {
        const findProject = state.projects.find(
          project => project.projectId === projectId
        )

        const findBoard = findProject?.boards.find(
          board => droppableIdStart === board.id
        )

        const tasksInFindedBoard = findBoard?.tasks.splice(
          droppableIndexStart,
          1
        )
        //@ts-ignore
        findBoard?.tasks.splice(droppableIndexEnd, 0, ...tasksInFindedBoard)
      }

      // In other board
      if (droppableIdStart !== droppableIdEnd) {
        const findProject = state.projects.find(
          project => project.projectId === projectId
        )

        const findStartBoard = findProject?.boards.find(
          board => droppableIdStart === board.id
        )

        const tasksInFindedBoard = findStartBoard?.tasks.splice(
          droppableIndexStart,
          1
        )

        const findEndBoard = findProject?.boards.find(
          board => droppableIdEnd === board.id
        )
        //@ts-ignore
        findEndBoard?.tasks.splice(droppableIndexEnd, 0, ...tasksInFindedBoard)
      }

      return state

    default:
      return state
  }
}
