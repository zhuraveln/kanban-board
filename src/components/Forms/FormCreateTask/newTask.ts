import dayjs, { Dayjs } from 'dayjs'

import { uniqId } from '../../../utils/uniqId'
import { PriorityTypes } from '../FormCreateBoard/types'

import { CreateTaskFormFields } from './types'

export class Task {
  readonly id: string = uniqId()
  readonly number: number
  public title: string
  public description: string
  readonly dateCreation: Dayjs = dayjs()
  public targetDate: Dayjs
  public priority: PriorityTypes

  constructor(data: CreateTaskFormFields, number: number) {
    this.number = number + 1
    this.title = data.title
    this.description = data.description
    this.targetDate = data.targetDate
    this.priority = data.priority
  }
}
