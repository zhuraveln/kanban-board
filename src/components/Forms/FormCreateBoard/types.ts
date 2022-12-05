import { Dayjs } from 'dayjs'
import { Dispatch, SetStateAction } from 'react'

/** Interface for Form Create Board Props */
export interface IFormCreateBoardProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
}

/** Types for fields for create board form */
export type CreateBoardFormFields = {
  name: string
}

/** Types for Board Item */
export type BoardItem = {
  id: string
  name: string
  columns: ColumnItem[]
  tasksCounter: number
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
  description: string
  dateCreation: Dayjs
  targetDate: Dayjs
}
