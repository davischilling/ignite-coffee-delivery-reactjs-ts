import { Minus, Plus } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeMarketContext } from '../../contexts/CartItems'
import { CoffeeItem } from '../../contexts/reducers'

import styles from './styles'

const { DivAddRemove, SpanItemCounter } = styles

interface AddRemoveToCartProps {
  item: CoffeeItem
}

export const AddRemoveToCart = ({ item }: AddRemoveToCartProps) => {
  const {
    cartCoffeeItems: { cartCoffeeItemsState },
    handleAddCoffeeItemToCart,
    handleRemoveCoffeeItemToCart,
  } = useContext(CoffeeMarketContext)
  const useCartCoffeeItemIndex = cartCoffeeItemsState.findIndex(
    (el) => el.cartCoffeeItem.id === item.id,
  )
  let startingAmount
  if (useCartCoffeeItemIndex < 0) {
    startingAmount = 0
  } else {
    startingAmount = cartCoffeeItemsState[useCartCoffeeItemIndex].itemAmount
  }

  const [amountValue, setAmountValue] = useState(startingAmount)

  const onAddClick = () => {
    handleAddCoffeeItemToCart(item)
  }

  const onRemoveClick = () => {
    handleRemoveCoffeeItemToCart(item)
  }

  useEffect(() => {
    setAmountValue((state) => {
      if (useCartCoffeeItemIndex < 0) {
        return 0
      } else {
        return cartCoffeeItemsState[useCartCoffeeItemIndex].itemAmount
      }
    })
  }, [cartCoffeeItemsState, useCartCoffeeItemIndex])

  return (
    <DivAddRemove>
      <Minus
        size={16}
        color={'#8047F8'}
        cursor="pointer"
        onClick={onRemoveClick}
      />
      <SpanItemCounter>{amountValue}</SpanItemCounter>
      <Plus size={16} color={'#8047F8'} cursor="pointer" onClick={onAddClick} />
    </DivAddRemove>
  )
}
