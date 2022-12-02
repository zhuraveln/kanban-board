import { Project } from '../../components/Forms/FormCreateProject/newProject'
import {
  ProjectItem,
  TaskItem
} from '../../components/Forms/FormCreateProject/types'
import { ProjectAction, ProjectActionsTypes, ProjectState } from './types'

const newProject = new Project('test Project')
const initialState: ProjectState = {
  projects: [newProject.startProject]
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

      if (findProject) {
        findProject.boards[0].tasks.push(action.payload)
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
