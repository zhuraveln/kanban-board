import { Dispatch, SetStateAction } from 'react'

/** Interface for Form Create Project Props */
export interface IFormCreateProjectProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
}

/** Types for fields in create project form */
export type CreateTaskFormFields = {
  projectName: string
}

/** Types for Project Item */
export type ProjectItem = {
  projectId: string
  projectName: string
  boards: BoardItem[]
}

/** Types for Board Item */
export type BoardItem = {
  id: string
  boardName: string
  tasks: TaskItem[]
}

/** Types for Task Item */
export type TaskItem = {
  id: string
  projectId: string
  title: string
  description: string
}
