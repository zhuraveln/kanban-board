// Interface for Button FC
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  props?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
}
