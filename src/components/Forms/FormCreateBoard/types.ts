import { Dayjs } from 'dayjs'

/** Types for fields for create board form */
export type CreateBoardFormFields = {
  name: string
}

/** Types for Board Item */
export type BoardItem = {
  id: string
  name: string
  columns: ColumnItem[]
  createdTasksCounter: number
}

/** Types for Column Item */
export type ColumnItem = {
  id: string
  name: string
  tasks: TaskItem[]
}

/** Types for Task Item */
export type TaskItem = {
  id: string
  number: number
  title: string
  description: string | null
  dateCreation: Dayjs
  targetDate: Dayjs | null
  priority: PriorityTypes
  status: string
  subtasks: SubTaskItem[]
  comments: CommentItem[]
}

/** Types for SubTask Item */
export type SubTaskItem = {
  id: string
  title: string
  isComplete: boolean
}

/** Types for Comment Item */
export type CommentItem = {
  id: string
  title: string
}

/**  Priority Types for Task*/
export enum PriorityTypes {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}
