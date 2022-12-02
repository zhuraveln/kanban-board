import { RootState } from './reducers/index'

/** Selector for getting all project from state */
export const projectsSelector = (state: RootState) => state.projects

/** Selector for getting the one project by id from state */
export const projectSelector = (projectId: string) => (state: RootState) =>
  state.projects.projects.find(project => project.projectId === projectId)
