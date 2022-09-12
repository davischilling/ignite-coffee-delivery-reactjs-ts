import { Plus, Minus } from 'phosphor-react'

import styles from './styles'

const { DivAddRemove, SpanItemCounter } = styles

export const AddRemoveToCart = () => (
  <DivAddRemove>
    <Minus size={16} color={'#8047F8'} cursor="pointer" />
    <SpanItemCounter>1</SpanItemCounter>
    <Plus size={16} color={'#8047F8'} cursor="pointer" />
  </DivAddRemove>
)
