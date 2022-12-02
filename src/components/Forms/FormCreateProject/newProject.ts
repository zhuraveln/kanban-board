import { uniqId } from '../../../utils/uniqId'
import { BoardItem, ProjectItem } from './types'

export class Project {
  readonly projectId: string = uniqId()
  public projectName: string
  readonly boards: BoardItem[] = [
    {
      id: uniqId(),
      boardName: 'Queue',
      tasks: [
        {
          description: 'description for task in Queue',
          id: uniqId(),
          projectId: this.projectId,
          title: 'task in Queue'
        }
      ]
    },
    {
      id: uniqId(),
      boardName: 'Development',
      tasks: [
        {
          description: 'description for task in Development',
          id: uniqId(),
          projectId: this.projectId,
          title: 'task in Development'
        }
      ]
    },
    {
      id: uniqId(),
      boardName: 'Done',
      tasks: [
        {
          description: 'description for task in Done',
          id: uniqId(),
          projectId: this.projectId,
          title: 'task in Done'
        }
      ]
    }
  ]

  constructor(name: string) {
    this.projectName = name
  }

  get startProject(): ProjectItem {
    return {
      projectId: this.projectId,
      projectName: this.projectName,
      boards: this.boards
    }
  }
}
