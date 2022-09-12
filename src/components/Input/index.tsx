import styles from './styles'

const { Input } = styles

interface InputComponentProps {
  text: string
  size: number
}

export const InputComponent = ({ text, size }: InputComponentProps) => (
  <Input placeholder={text} size={size} />
)
