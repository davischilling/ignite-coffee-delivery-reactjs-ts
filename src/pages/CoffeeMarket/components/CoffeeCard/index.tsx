import { ShoppingCart } from 'phosphor-react'

import styles from './styles'
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

interface CoffeeCardProps {
  img: string
  tags: string[]
  name: string
  description: string
  value: number
}

export const CoffeeCard = ({
  img,
  tags,
  name,
  description,
  value,
}: CoffeeCardProps) => (
  <DivWrapper>
    <DivInfos>
      <img src={img} alt="" />
      <DivTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </DivTags>
      <SpanName>{name}</SpanName>
      <SpanDescription>{description}</SpanDescription>
    </DivInfos>
    <DivPriceCart>
      <span>
        R$ <strong>{String(value)}</strong>
      </span>
      <AddRemoveToCart />
      <SpanCartBtn>
        <ShoppingCart size={22} color={'#fff'} weight="fill" />
      </SpanCartBtn>
    </DivPriceCart>
  </DivWrapper>
)
