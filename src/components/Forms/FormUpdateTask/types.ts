import { Dayjs } from 'dayjs'
import { PriorityTypes, SubTaskItem } from '../FormCreateBoard/types'

/** Types for fields in update task form */
export type UpdateTaskFormFields = {
  title: string
  description: string
  finishAt: Dayjs
  file: File | null
  priority: PriorityTypes
}
