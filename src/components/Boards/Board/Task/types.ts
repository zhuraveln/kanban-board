import { CommentItem, TaskItem } from '../../../Forms/FormCreateBoard/types'

/** Interface for Full Task Props */
export interface ITaskProps extends TaskItem {
  index: number
}

/** Interface for comments group */
export interface ICommentsGroup {
  [key: string]: CommentItem[]
}
