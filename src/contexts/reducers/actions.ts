import { CoffeeItem } from './index'

export enum ActionTypes {
  ADD_COFFEE_ITEM_TO_CART = 'ADD_COFFEE_ITEM_TO_CART',
  REMOVE_COFFEE_ITEM_TO_CART = 'REMOVE_COFFEE_ITEM_TO_CART',
  POP_COFFEE_ITEM_TO_CART = 'POP_COFFEE_ITEM_TO_CART',
}

export const addCoffeeItemToCart = (coffeeItem: CoffeeItem) => {
  return {
    type: ActionTypes.ADD_COFFEE_ITEM_TO_CART,
    payload: { coffeeItem },
  }
}

export const removeCoffeeItemToCart = (coffeeItem: CoffeeItem) => {
  return {
    type: ActionTypes.REMOVE_COFFEE_ITEM_TO_CART,
    payload: { coffeeItem },
  }
}

export const popCoffeeItemToCart = (coffeeItem: CoffeeItem) => {
  return {
    type: ActionTypes.POP_COFFEE_ITEM_TO_CART,
    payload: { coffeeItem },
  }
}
