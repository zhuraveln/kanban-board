import { Dispatch, SetStateAction } from 'react'

// Interface for Form Create Project Props
export interface IFormCreateProjectProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
}

/** Types for fields in create project form */
export type CreateTaskFormFields = {
  projectName: string
}
