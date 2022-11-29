import { CSSProperties } from 'react'

// Interface for Button FC
export interface IButtonProps {
  props?: React.HTMLProps<HTMLButtonElement> | CSSProperties
  styles?: CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: string
}

// Interface for Button FC
// export interface IButtonProps {
//   props?:
//     | React.HTMLProps<HTMLButtonElement>
//     | React.MouseEventHandler<HTMLInputElement>
//     | CSSProperties
//   // styles?: CSSProperties
//   // onClick?: () => void
//   children: string
// }
