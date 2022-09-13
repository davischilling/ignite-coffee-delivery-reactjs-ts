import styles from './styles'

const { Input } = styles

interface InputComponentProps {
  text: string
}

export const InputComponent = ({ text }: InputComponentProps) => (
  <Input placeholder={text} />
)
