import { BoardItem, ColumnItem } from '../FormCreateBoard/types'
import { UpdateBoardFormFields } from './FormUpdateBoard'

/** Class for create updated Board */
export class updatedBoard {
  public id: string
  public name: string
  public columns: ColumnItem[]
  public createdTasksCounter: number

  constructor(data: UpdateBoardFormFields, board: BoardItem) {
    this.id = board.id
    this.name = data.name
    this.columns = board.columns
    this.createdTasksCounter = board.createdTasksCounter
  }
}
