// Interface for Form FC
export interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  props?: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
}
