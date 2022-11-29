import { CSSProperties, InputHTMLAttributes } from 'react'

// Interface for Input FC
export interface IInputProps {
  onChange: (str: string) => void
  placeholder: string
  name: string
  value?: string
}

// // Interface for Input FC
// export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   // props?: any
//   // styles?: CSSProperties
//   // children: string
// }
