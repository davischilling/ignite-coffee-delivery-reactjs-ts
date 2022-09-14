import { ShoppingCart } from 'phosphor-react'

import { AddRemoveToCart } from '../../../../components'
import { CoffeeItem } from '../../../../contexts/reducers'
import styles from './styles'

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
  item: CoffeeItem
}

export const CoffeeCard = ({ item }: CoffeeCardProps) => {
  return (
    <DivWrapper>
      <DivInfos>
        <img src={item.img} alt="" />
        <DivTags>
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </DivTags>
        <SpanName>{item.name}</SpanName>
        <SpanDescription>{item.description}</SpanDescription>
      </DivInfos>
      <DivPriceCart>
        <span>
          R$ <strong>{String(item.value.toFixed(2))}</strong>
        </span>
        <AddRemoveToCart item={item} />
        <SpanCartBtn>
          <ShoppingCart size={22} color={'#fff'} weight="fill" />
        </SpanCartBtn>
      </DivPriceCart>
    </DivWrapper>
  )
}
