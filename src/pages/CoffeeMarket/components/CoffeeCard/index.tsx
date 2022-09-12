import { ShoppingCart } from 'phosphor-react'

import styles from './styles'
import ExpressoTradicional from '../../../../assets/expresso-tradicional.svg'
import { AddRemoveToCart } from '../../../../components'

const {
  DivWrapper,
  DivInfos,
  DivTags,
  DivPriceCart,
  SpanName,
  SpanDescription,
  SpanCartBtn,
} = styles

export const CoffeeCard = () => (
  <DivWrapper>
    <DivInfos>
      <img src={ExpressoTradicional} alt="" />
      <DivTags>
        <span>tradicional</span>
      </DivTags>
      <SpanName>Expresso Tradicional</SpanName>
      <SpanDescription>
        O tradicional café feito com água quente e grãos moídos
      </SpanDescription>
    </DivInfos>
    <DivPriceCart>
      <span>
        R$ <strong>9,90</strong>
      </span>
      <AddRemoveToCart />
      <SpanCartBtn>
        <ShoppingCart size={22} color={'#fff'} weight="fill" />
      </SpanCartBtn>
    </DivPriceCart>
  </DivWrapper>
)
