import {
  ProjectAction,
  ProjectActionsTypes,
  ProjectItem,
  ProjectState
} from './types'

const initialState: ProjectState = {
  projects: [] as ProjectItem[]
}

export const projectReducer = (
  state = initialState,
  action: ProjectAction
): ProjectState => {
  switch (action.type) {
    case ProjectActionsTypes.CREATE_NEW_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] }

    default:
      return state
  }
}

export const createNewProject = (payload: ProjectItem) => ({
  type: ProjectActionsTypes.CREATE_NEW_PROJECT,
  payload
})
