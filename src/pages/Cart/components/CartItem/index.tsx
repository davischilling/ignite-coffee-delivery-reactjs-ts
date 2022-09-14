import { Trash } from 'phosphor-react'
import { useContext } from 'react'

import { AddRemoveToCart } from '../../../../components'
import { CoffeeMarketContext } from '../../../../contexts/CartItems'
import { CartCoffeeItem } from '../../../../contexts/reducers'
import styles from './styles'

const {
  DivCartItemWrapper,
  DivWrapper,
  DivItemEditWrapper,
  DivItemEdit,
  BtnRemove,
  SpanLineDivider,
} = styles

interface CartItemComponentProps {
  item: CartCoffeeItem
}

export const CartItemComponent = ({ item }: CartItemComponentProps) => {
  const { handlePopCoffeeItemToCart } = useContext(CoffeeMarketContext)

  const onClickPopCoffeeItem = () => {
    handlePopCoffeeItemToCart(item.cartCoffeeItem)
  }

  return (
    <DivCartItemWrapper>
      <DivWrapper>
        <img src={item.cartCoffeeItem.img} alt="" />
        <DivItemEditWrapper>
          <span>{item.cartCoffeeItem.name}</span>
          <DivItemEdit>
            <AddRemoveToCart item={item.cartCoffeeItem} />
            <BtnRemove>
              <Trash size={16} color={'#8047F8'} />
              <span onClick={onClickPopCoffeeItem}>remover</span>
            </BtnRemove>
            <strong>R$ {String(item.cartCoffeeItem.value.toFixed(2))}</strong>
          </DivItemEdit>
        </DivItemEditWrapper>
      </DivWrapper>
      <SpanLineDivider />
    </DivCartItemWrapper>
  )
}
