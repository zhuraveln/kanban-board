import dayjs, { Dayjs } from 'dayjs'

import { uniqId } from '../../../utils/uniqId'
import {
  CommentItem,
  PriorityTypes,
  SubTaskItem
} from '../FormCreateBoard/types'
import { CreateTaskFormFields } from './FormCreateTask'

/** Class for create new Task */
export class Task {
  readonly id: string = uniqId()
  readonly number: number
  public title: string
  public description: string | null
  readonly createdAt: Dayjs = dayjs()
  public finishBy: Dayjs | null
  public priority: PriorityTypes
  public status: string = 'Queue'
  public file: string | null
  public comments: CommentItem[] = []
  public subtasks: SubTaskItem[] = []

  constructor(data: CreateTaskFormFields, number: number, file: string | null) {
    this.number = number + 1
    this.title = data.title
    this.description = data.description ? data.description : null
    this.finishBy = data.finishBy ? data.finishBy : null
    this.priority = data.priority
    this.file = file
  }
}
