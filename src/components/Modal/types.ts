import { Dispatch, SetStateAction } from 'react'

// Interface for Modal FC
export interface IModalProps {
  active: Boolean
  setActive: Dispatch<SetStateAction<boolean>>
  title: string
  children: React.ReactNode
}
