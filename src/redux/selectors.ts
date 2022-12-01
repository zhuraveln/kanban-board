import { RootState } from './reducers/index'

/** Selector for getting all project from state */
export const projectsSelector = (state: RootState) => state.project

/** Selector for getting all tasks from the project from state */
export const projectSelector = (projectId: string) => (state: RootState) =>
  state.project.projects.find(project => project.id === projectId)
