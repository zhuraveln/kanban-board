/** Types for fields in create subtask form */
export type CreateSubTaskFormFields = {
  title: string
}

// Interface for Form Create SubTask props
export interface IFormCreateSubTaskProps {
  setVisibleInput: React.Dispatch<React.SetStateAction<boolean>>
}
