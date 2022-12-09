import { CommentItem } from '../../../../Forms/FormCreateBoard/types'

/** Interface for Comment Props */
export interface ICommentProps extends CommentItem {
  getReplies: (parentId: string) => CommentItem[]
}
