import { uniqId } from '../../../utils/uniqId'
import { CreateSubTaskFormFields } from './types'

/** Class for create new Subtask */
export class SubTask {
  readonly id: string = uniqId()
  public title: string
  public isComplete: boolean = false

  constructor(data: CreateSubTaskFormFields) {
    this.title = data.title
  }
}
