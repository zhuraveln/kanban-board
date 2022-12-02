import { Dispatch, SetStateAction } from 'react'

// Interface for Modal FC
export interface IFormCreateTaskProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
  projectId: string
}

/** Types for fields in create task form */
export type CreateTaskFormFields = {
  title: string
  description: string
}
