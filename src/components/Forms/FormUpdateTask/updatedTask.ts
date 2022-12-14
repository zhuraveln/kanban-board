import { Dayjs } from 'dayjs'
import { CurrentTaskItem } from '../../../redux/board/types'

import {
  CommentItem,
  PriorityTypes,
  SubTaskItem
} from '../FormCreateBoard/types'
import { UpdateTaskFormFields } from './FormUpdateTask'

/** Class for create updated Task */
export class updatedTask {
  readonly id: string
  readonly index: number
  readonly columnIndex: number
  readonly number: number
  public title: string
  public description: string
  readonly createdAt: Dayjs
  public finishBy: Dayjs
  public priority: PriorityTypes
  public status: string
  public file: string | null
  public comments: CommentItem[]
  public subtasks: SubTaskItem[]

  constructor(
    data: UpdateTaskFormFields,
    task: CurrentTaskItem,
    file: string | null
  ) {
    this.id = task.id
    this.index = task.index
    this.columnIndex = task.columnIndex
    this.number = task.number
    this.title = data.title
    this.description = data.description
    this.createdAt = task.createdAt
    this.finishBy = data.finishBy
    this.priority = data.priority
    this.status = task.priority
    this.file = file
    this.comments = task.comments
    this.subtasks = task.subtasks
  }
}
