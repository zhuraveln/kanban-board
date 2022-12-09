/** Types for fields in create comment form */
export type CreateCommentFormFields = {
  body: string
}

// Interface for Form Create Comment props
export interface IFormCreateCommentProps {
  parentId: null | string
  setVisibleInput: React.Dispatch<React.SetStateAction<boolean>>
}
