import { uniqId } from '../../../utils/uniqId'
import { CreateCommentFormFields } from './types'

/** Class for create new Subtask */
export class Comment {
  readonly id: string = uniqId()
  public title: string

  constructor(data: CreateCommentFormFields) {
    this.title = data.title
  }
}
