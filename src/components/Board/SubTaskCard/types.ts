import { SubTaskItem } from '../../Forms/FormCreateBoard/types'

/** Interface for SubTask Card Props */
export interface ISubTaskCardProps extends SubTaskItem {
  index: number // index of SubTask in array for update status functional in Redux
}
