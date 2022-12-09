import { CommentItem } from '../../../../Forms/FormCreateBoard/types'

/** Interface for CommentsList Props */
export interface ICommentsListProps {
  comments: CommentItem[]
  getReplies: (parentId: string) => CommentItem[]
}
