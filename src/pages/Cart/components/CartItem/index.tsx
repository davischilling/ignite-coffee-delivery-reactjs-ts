import { Trash } from 'phosphor-react'

import { AddRemoveToCart } from '../../../../components'
import styles from './styles'
import ExpressoTradicional from '../../../../assets/expresso-tradicional.svg'

const {
  DivCartItemWrapper,
  DivWrapper,
  DivItemEditWrapper,
  DivItemEdit,
  BtnRemove,
} = styles

export const CartItemComponent = () => (
  <DivCartItemWrapper>
    <DivWrapper>
      <img src={ExpressoTradicional} alt="" />
      <DivItemEditWrapper>
        <span>Expresso Tradicional</span>
        <DivItemEdit>
          <AddRemoveToCart />
          <BtnRemove>
            <Trash size={16} color={'#8047F8'} />
            <span>remover</span>
          </BtnRemove>
        </DivItemEdit>
      </DivItemEditWrapper>
      <strong>R$ 9,90</strong>
    </DivWrapper>
    <span />
  </DivCartItemWrapper>
)
