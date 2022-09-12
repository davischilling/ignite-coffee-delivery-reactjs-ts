import { ReactNode } from 'react'
import styles from './styles'

const { Button } = styles

export enum BtnTypes {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  MONEY = 'MONEY',
}

interface ButtonProps {
  icon: ReactNode
  text: string
  selected: BtnTypes
  type: BtnTypes
}

export const ButtonComponent = ({
  text,
  icon,
  selected,
  type,
}: ButtonProps) => {
  return (
    <Button isActive={selected === type}>
      {icon}
      {text}
    </Button>
  )
}
