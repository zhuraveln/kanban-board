import dayjs from 'dayjs'

import { uniqId } from '../../../utils/uniqId'

import { ColumnItem, CreateBoardFormFields, PriorityTypes } from './types'

/** Class for create new Board */
export class Board {
  readonly id: string = uniqId()
  public name: string
  readonly createdTasksCounter: number = 3
  readonly columns: ColumnItem[] = [
    {
      id: uniqId(),
      name: 'Queue',
      tasks: []
    },
    {
      id: uniqId(),
      name: 'Development',
      tasks: []
    },
    {
      id: uniqId(),
      name: 'Done',
      tasks: []
    }
  ]

  constructor(data: CreateBoardFormFields) {
    this.name = data.name
  }
}
