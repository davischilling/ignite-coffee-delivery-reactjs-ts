import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface CoffeeItem {
  id: string
  img: string
  tags: string[]
  name: string
  description: string
  value: number
}

export interface CartCoffeeItem {
  itemAmount: number
  cartCoffeeItem: CoffeeItem
}

export interface CartCoffeeItemsState {
  cartCoffeeItemsState: CartCoffeeItem[]
}

export const cartCoffeeItemsReducer = (
  state: CartCoffeeItemsState,
  action: any,
) => {
  const coffeeItemIdex = state.cartCoffeeItemsState.findIndex(
    (cartCoffeeElement) =>
      cartCoffeeElement.cartCoffeeItem.id === action.payload.coffeeItem.id,
  )
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_ITEM_TO_CART: {
      if (coffeeItemIdex < 0) {
        return produce(state, (draft) => {
          draft.cartCoffeeItemsState.push({
            itemAmount: 1,
            cartCoffeeItem: action.payload.coffeeItem,
          })
        })
      } else {
        return produce(state, (draft) => {
          draft.cartCoffeeItemsState[coffeeItemIdex].itemAmount += 1
        })
      }
    }
    case ActionTypes.REMOVE_COFFEE_ITEM_TO_CART: {
      if (coffeeItemIdex < 0) {
        return state
      } else {
        return produce(state, (draft) => {
          if (draft.cartCoffeeItemsState[coffeeItemIdex].itemAmount === 1) {
            draft.cartCoffeeItemsState.splice(coffeeItemIdex, 1)
          } else {
            draft.cartCoffeeItemsState[coffeeItemIdex].itemAmount -= 1
          }
        })
      }
    }
    case ActionTypes.POP_COFFEE_ITEM_TO_CART: {
      if (coffeeItemIdex < 0) {
        return state
      } else {
        return produce(state, (draft) => {
          draft.cartCoffeeItemsState.splice(coffeeItemIdex, 1)
        })
      }
    }
    default:
      return state
  }
}
