import {
  ProjectItem,
  TaskItem
} from '../components/Forms/FormCreateProject/types'
import { ProjectActionsTypes } from './types'

// Action for create a new project
export const createNewProject = (payload: ProjectItem) => ({
  type: ProjectActionsTypes.CREATE_NEW_PROJECT,
  payload
})

// Action for create a new task
export const createNewTask = (payload: TaskItem) => ({
  type: ProjectActionsTypes.CREATE_NEW_TASK,
  payload
})

// Action for sort a tasks
export const sortDroppableTasks = (
  projectId: string,
  droppableIdStart: string,
  droppableIdEnd: string,
  droppableIndexStart: number,
  droppableIndexEnd: number,
  draggableId: string
) => ({
  type: ProjectActionsTypes.DRAG_HAPPENED,
  payload: {
    projectId,
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
  }
})
