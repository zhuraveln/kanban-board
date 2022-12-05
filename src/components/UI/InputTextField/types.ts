// Interface for TextField FC
export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
