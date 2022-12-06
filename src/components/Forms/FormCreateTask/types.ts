import { Dayjs } from 'dayjs'
import { Dispatch, SetStateAction } from 'react'
import { PriorityTypes } from '../FormCreateBoard/types'

/** Types for fields in create task form */
export type CreateTaskFormFields = {
  title: string
  description: string
  targetDate: Dayjs
  priority: PriorityTypes
}
