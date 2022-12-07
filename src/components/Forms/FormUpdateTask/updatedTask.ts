import { Dayjs } from 'dayjs'
import { CurrentTaskItem } from '../../../redux/board/types'

import { PriorityTypes, SubTaskItem, TaskItem } from '../FormCreateBoard/types'
import { UpdateTaskFormFields } from './types'

export class updatedTask {
  readonly id: string
  readonly index: number
  readonly columnIndex: number
  readonly number: number
  public title: string
  public description: string
  readonly dateCreation: Dayjs
  public targetDate: Dayjs
  public priority: PriorityTypes
  public status: string
  public subtasks: SubTaskItem[]

  constructor(data: UpdateTaskFormFields, task: CurrentTaskItem) {
    this.id = task.id
    this.index = task.index
    this.columnIndex = task.columnIndex
    this.number = task.number
    this.title = data.title
    this.description = data.description
    this.dateCreation = task.dateCreation
    this.targetDate = data.targetDate
    this.priority = data.priority
    this.status = task.priority
    this.subtasks = data.subtasks
  }
}
