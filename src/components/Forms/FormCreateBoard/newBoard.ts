import { uniqId } from '../../../utils/uniqId'
import { BoardItem, ColumnItem } from './types'

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
          description: 'description for task'
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
          description: 'description for task'
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
          description: 'description for task'
        }
      ]
    }
  ]

  constructor(name: string) {
    this.name = name
  }

  get startBoard(): BoardItem {
    return {
      id: this.id,
      name: this.name,
      columns: this.columns
    }
  }
}
