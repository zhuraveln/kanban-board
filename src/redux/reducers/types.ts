// Interface for Project State
export interface ProjectState {
  projects: ProjectItem[]
}

// Types for Project Item
export type ProjectItem = {
  id: string
  projectName: string
  tasks: TaskItem[]
}

// Types for Task Item
export type TaskItem = {
  id: string
  projectId: string
  title: string
  description: string
}

// Project Actions Types
export enum ProjectActionsTypes {
  CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT',
  CREATE_NEW_TASK = 'CREATE_NEW_TASK'
}

// Types for Project Actions
export type ProjectAction = CreateNewProjectAction | CreateNewTaskAction

// Interface for Create new Project Action
export interface CreateNewProjectAction {
  type: ProjectActionsTypes.CREATE_NEW_PROJECT
  payload: ProjectItem
}

// Interface for Create new Task Action
export interface CreateNewTaskAction {
  type: ProjectActionsTypes.CREATE_NEW_TASK
  payload: TaskItem
}
