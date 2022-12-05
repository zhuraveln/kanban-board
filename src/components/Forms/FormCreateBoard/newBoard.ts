import dayjs from 'dayjs'

import { uniqId } from '../../../utils/uniqId'

import { ColumnItem, CreateBoardFormFields } from './types'

export class Board {
  readonly id: string = uniqId()
  public name: string
  readonly columns: ColumnItem[] = [
    {
      id: uniqId(),
      name: 'Queue',
      tasks: [
        {
          id: uniqId(),
          title: 'task 1',
          description: 'description for task',
          dateCreation: dayjs('01/12/2022 18:00'),
          targetDate: dayjs('05/12/2022 18:00')
        }
      ]
    },
    {
      id: uniqId(),
      name: 'Development',
      tasks: [
        {
          id: uniqId(),
          title: 'task 2',
          description: 'description for task',
          dateCreation: dayjs('01/12/2022 18:00'),
          targetDate: dayjs('05/12/2022 18:00')
        }
      ]
    },
    {
      id: uniqId(),
      name: 'Done',
      tasks: [
        {
          id: uniqId(),
          title: 'task 3',
          description: 'description for task',
          dateCreation: dayjs('01/12/2022 18:00'),
          targetDate: dayjs('05/12/2022 18:00')
        }
      ]
    }
  ]

  constructor(data: CreateBoardFormFields) {
    this.name = data.name
  }
}
