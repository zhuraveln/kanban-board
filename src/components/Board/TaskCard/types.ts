import { TaskItem } from '../../Forms/FormCreateBoard/types'

/** Interface for Task Card Props */
export interface ITaskCardProps extends TaskItem {
  columnIndex: number // index of Column for update task functional in Redux
  index: number // index of Task in array for drag and drop functional, and update functional in Redux
}
