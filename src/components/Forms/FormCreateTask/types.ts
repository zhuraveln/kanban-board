import { Dayjs } from 'dayjs'
import { PriorityTypes } from '../FormCreateBoard/types'

/** Types for fields in create task form */
export type CreateTaskFormFields = {
  title: string
  description: string
  finishBy: Dayjs
  file: File | null
  priority: PriorityTypes
}
