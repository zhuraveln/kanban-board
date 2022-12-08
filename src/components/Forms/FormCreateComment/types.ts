/** Types for fields in create comment form */
export type CreateCommentFormFields = {
  title: string
}

// Interface for Form Create Comment props
export interface IFormCreateCommentProps {
  setVisibleInput: React.Dispatch<React.SetStateAction<boolean>>
}
