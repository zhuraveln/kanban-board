import { Dayjs } from 'dayjs'
import { Dispatch, SetStateAction } from 'react'
import { PriorityTypes } from '../FormCreateBoard/types'

// Interface for Modal FC
export interface IFormCreateTaskProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
}

/** Types for fields in create task form */
export type CreateTaskFormFields = {
  title: string
  description: string
  targetDate: Dayjs
  priority: PriorityTypes
}
