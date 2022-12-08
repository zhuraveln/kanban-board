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
      tasks: [
        {
          id: uniqId(),
          number: 1,
          title: 'task 1',
          description: 'description for task',
          dateCreation: dayjs('01/12/2022 18:00'),
          targetDate: dayjs('05/12/2022 18:00'),
          priority: PriorityTypes.LOW,
          status: 'Queue',
          comments: [{ id: 'b57w7', title: 'first comment' }],
          subtasks: []
        }
      ]
    },
    {
      id: uniqId(),
      name: 'Development',
      tasks: [
        {
          id: uniqId(),
          number: 2,
          title: 'task 2',
          description: 'description for task',
          dateCreation: dayjs('01/12/2022 18:00'),
          targetDate: dayjs('05/12/2022 18:00'),
          priority: PriorityTypes.LOW,
          status: 'Development',
          comments: [{ id: 'tktkqwdq', title: 'first comment' }],
          subtasks: []
        }
      ]
    },
    {
      id: uniqId(),
      name: 'Done',
      tasks: [
        {
          id: uniqId(),
          number: 3,
          title: 'task 3',
          description: 'description for task',
          dateCreation: dayjs('01/12/2022 18:00'),
          targetDate: dayjs('05/12/2022 18:00'),
          priority: PriorityTypes.LOW,
          status: 'Done',
          comments: [{ id: '6i776mtyj', title: 'first comment' }],
          subtasks: []
        }
      ]
    }
  ]

  constructor(data: CreateBoardFormFields) {
    this.name = data.name
  }
}
