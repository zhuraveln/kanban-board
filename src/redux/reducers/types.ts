// Project Actions Types
export enum ProjectActionsTypes {
  CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT'
}

// Interface for Project State
export interface ProjectState {
  projects: ProjectItem[]
}

// Types for Project Item
export type ProjectItem = {
  projectTitle: string
  projectDescription: string
}

// Types for Project Actions
export type ProjectAction = CreateNewProjectAction

// Interface for Create new Project Action
export interface CreateNewProjectAction {
  type: ProjectActionsTypes.CREATE_NEW_PROJECT
  payload: ProjectItem
}
