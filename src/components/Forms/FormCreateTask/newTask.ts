import dayjs, { Dayjs } from 'dayjs'

import { uniqId } from '../../../utils/uniqId'
import {
  CommentItem,
  PriorityTypes,
  SubTaskItem
} from '../FormCreateBoard/types'

import { CreateTaskFormFields } from './types'

/** Class for create new Task */
export class Task {
  readonly id: string = uniqId()
  readonly number: number
  public title: string
  public description: string
  readonly dateCreation: Dayjs = dayjs()
  public targetDate: Dayjs | null
  public priority: PriorityTypes
  public status: string = 'Queue'
  public comments: CommentItem[] = []
  public subtasks: SubTaskItem[] = []

  constructor(data: CreateTaskFormFields, number: number) {
    this.number = number + 1
    this.title = data.title
    this.description = data.description
    this.targetDate = data.targetDate
    this.priority = data.priority
  }
}
