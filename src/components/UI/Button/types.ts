import { CSSProperties } from 'react'

// Interface for Button FC
export interface IButtonProps {
  // children: React.ReactNode
  // props?: React.HTMLProps<HTMLButtonElement> | CSSProperties
  styles?: CSSProperties
  onClick?: () => void
  children: string
}
