import { ReactNode } from 'react'
import styles, { IconTypes } from './styles'

const { Span } = styles

interface IconComponentProps {
  type: IconTypes
  icon: ReactNode
  size: number
}

export const IconComponent = ({ type, icon, size }: IconComponentProps) => (
  <Span type={type} size={size}>
    {icon}
  </Span>
)
