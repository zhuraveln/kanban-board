import dayjs, { Dayjs } from 'dayjs'
import { uniqId } from '../../../utils/uniqId'
import { CreateSubTaskFormFields } from './FormCreateSubTask'

/** Class for create new Subtask */
export class SubTask {
  readonly id: string = uniqId()
  public title: string
  public isComplete: boolean = false
  public createdAt: Dayjs = dayjs()

  constructor(data: CreateSubTaskFormFields) {
    this.title = data.title
  }
}
