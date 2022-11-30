// Interface for Input FC
export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  label?: string
  handleChange?: any
}
