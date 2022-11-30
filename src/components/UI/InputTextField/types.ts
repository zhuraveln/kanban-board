// Interface for TextField FC
export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  label?: string
  handleChange?: any
}
