import { CommentsGroup } from '../components/Boards/Board/Task/types'
import { CommentItem } from '../components/Forms/FormCreateBoard/types'

/** Creating a sorted object with comments by 'parentId' key */
export const sortByParentId = (comments: CommentItem[]) => {
  const group: CommentsGroup = {} // create a new group
  comments.forEach(comment => {
    group[String(comment.parentId)] ||= [] // create a new array with 'parentId' key if he is not
    group[String(comment.parentId)].push(comment) // push comment to array by 'parentId' key
  })
  return group
}
