// Interface for Select FC
export interface ISelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Object
  label?: string
  handleChange?: any
}
