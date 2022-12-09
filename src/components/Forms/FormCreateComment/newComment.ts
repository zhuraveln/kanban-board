import dayjs, { Dayjs } from 'dayjs'
import { uniqId } from '../../../utils/uniqId'
import { CreateCommentFormFields } from './types'

/** Class for create new Subtask */
export class Comment {
  readonly id: string = uniqId()
  parentId: null | string
  public body: string
  createdAt: Dayjs = dayjs()

  constructor(data: CreateCommentFormFields, parentId: null | string) {
    this.body = data.body
    this.parentId = parentId
  }
}
