import { Dayjs } from 'dayjs'
import { PriorityTypes } from '../FormCreateBoard/types'

/** Types for fields in update task form */
export type UpdateTaskFormFields = {
  title: string
  description: string
  finishBy: Dayjs
  file: File | null
  priority: PriorityTypes
}
