import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { coffeeItems } from './coffeeItems.db'
import {
  cartCoffeeItemsReducer,
  CartCoffeeItemsState,
  CoffeeItem,
} from './reducers'
import { addCoffeeItemToCart, removeCoffeeItemToCart } from './reducers/actions'

interface CoffeeMarketContextType {
  coffeeItems: CoffeeItem[]
  cartCoffeeItems: CartCoffeeItemsState
  handleAddCoffeeItemToCart: (coffeeItem: CoffeeItem) => void
  handleRemoveCoffeeItemToCart: (coffeeItem: CoffeeItem) => void
}

interface CoffeeMarketContextProviderProps {
  children: ReactNode
}

export const CoffeeMarketContext = createContext({} as CoffeeMarketContextType)

export const CoffeeMarketProvider = ({
  children,
}: CoffeeMarketContextProviderProps) => {
  const coffeeItemsState = coffeeItems

  const [cartCoffeeItemsState, dispatch] = useReducer(
    cartCoffeeItemsReducer,
    { cartCoffeeItemsState: [] },
    () => {
      const storedStateAsJSON: string | null = localStorage.getItem(
        '@ignite-coffee-delivery-1.0.0:cart-coffee-items',
      )

      if (storedStateAsJSON && storedStateAsJSON !== 'undefined') {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartCoffeeItemsState)

    localStorage.setItem(
      '@ignite-coffee-delivery-1.0.0:cart-coffee-items',
      stateJSON,
    )
  }, [cartCoffeeItemsState])

  const handleAddCoffeeItemToCart = (coffeeItem: CoffeeItem) => {
    dispatch(addCoffeeItemToCart(coffeeItem))
  }

  const handleRemoveCoffeeItemToCart = (coffeeItem: CoffeeItem) => {
    dispatch(removeCoffeeItemToCart(coffeeItem))
  }

  return (
    <CoffeeMarketContext.Provider
      value={{
        coffeeItems: coffeeItemsState,
        cartCoffeeItems: cartCoffeeItemsState,
        handleAddCoffeeItemToCart,
        handleRemoveCoffeeItemToCart,
      }}
    >
      {children}
    </CoffeeMarketContext.Provider>
  )
}
