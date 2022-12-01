import {
  ProjectAction,
  ProjectActionsTypes,
  ProjectItem,
  ProjectState,
  TaskItem
} from './types'

const initialState: ProjectState = {
  projects: [
    {
      id: 'lb57o0r4dnc2apyt1qe',
      projectName: 'test',
      tasks: [
        {
          description: 'description for task 1',
          id: 'lb57w7h8ostgupotncl',
          projectId: 'lb57o0r4dnc2apyt1qe',
          title: 'task 1'
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
        project => project.id === action.payload.projectId
      )

      if (findProject) {
        findProject.tasks.push(action.payload)
      }
      return state

    default:
      return state
  }
}

export const createNewProject = (payload: ProjectItem) => ({
  type: ProjectActionsTypes.CREATE_NEW_PROJECT,
  payload
})

export const createNewTask = (payload: TaskItem) => ({
  type: ProjectActionsTypes.CREATE_NEW_TASK,
  payload
})
