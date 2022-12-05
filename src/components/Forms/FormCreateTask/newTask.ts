import dayjs, { Dayjs } from 'dayjs'

import { uniqId } from '../../../utils/uniqId'

import { CreateTaskFormFields } from './types'

export class Task {
  readonly id: string = uniqId()
  public title: string
  public description: string
  readonly dateCreation: Dayjs = dayjs()
  public targetDate: Dayjs

  constructor(data: CreateTaskFormFields) {
    this.title = data.title
    this.description = data.description
    this.targetDate = data.targetDate
  }
}
