// Interface for Select FC
export interface ISelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  props?: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
  options: Object
  label?: string
  handleChange?: any
}
