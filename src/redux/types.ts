import {
  ProjectItem,
  TaskItem
} from '../components/Forms/FormCreateProject/types'

// Interface for Project State
export interface ProjectState {
  projects: ProjectItem[]
}

// Project Actions Types
export enum ProjectActionsTypes {
  CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT',
  CREATE_NEW_TASK = 'CREATE_NEW_TASK',
  DRAG_HAPPENED = 'DRAG_HAPPENED'
}

// Types for Project Actions
export type ProjectAction =
  | CreateNewProjectAction
  | CreateNewTaskAction
  | SortDroppableTasksAction

// Interface for Create a new Project Action
export interface CreateNewProjectAction {
  type: ProjectActionsTypes.CREATE_NEW_PROJECT
  payload: ProjectItem
}

// Interface for Create a new Task Action
export interface CreateNewTaskAction {
  type: ProjectActionsTypes.CREATE_NEW_TASK
  payload: TaskItem
}

// Interface for Sort a Task Action
export interface SortDroppableTasksAction {
  type: ProjectActionsTypes.DRAG_HAPPENED
  payload: any
}
