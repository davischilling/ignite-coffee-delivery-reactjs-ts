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
import {
  addCoffeeItemToCart,
  popCoffeeItemToCart,
  removeCoffeeItemToCart,
} from './reducers/actions'

interface CoffeeMarketContextType {
  coffeeItems: CoffeeItem[]
  cartCoffeeItems: CartCoffeeItemsState
  handleAddCoffeeItemToCart: (coffeeItem: CoffeeItem) => void
  handleRemoveCoffeeItemToCart: (coffeeItem: CoffeeItem) => void
  handlePopCoffeeItemToCart: (coffeeItem: CoffeeItem) => void
  amountOfItensInCart: number
}

interface CoffeeMarketContextProviderProps {
  children: ReactNode
}

export const CoffeeMarketContext = createContext({} as CoffeeMarketContextType)

export const CoffeeMarketProvider = ({
  children,
}: CoffeeMarketContextProviderProps) => {
  // const coffeeItemsState = coffeeItems
  // const [coffeeItemsState, setCoffeeItemsState] = useState<CoffeeItem[]>([])

  // useEffect(() => {
  //   setCoffeeItemsState(coffeeItems)
  // }, [])

  const [amountOfItensInCart, setAmountOfItensInCart] = useState(0)
  const [cartCoffeeItemsState, dispatch] = useReducer(
    cartCoffeeItemsReducer,
    { cartCoffeeItemsState: [] },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery-1.0.0:cart-coffee-items',
      )

      if (storedStateAsJSON && storedStateAsJSON !== 'undefined') {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  useEffect(() => {
    setAmountOfItensInCart(cartCoffeeItemsState.cartCoffeeItemsState.length)
  }, [cartCoffeeItemsState])

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

  const handlePopCoffeeItemToCart = (coffeeItem: CoffeeItem) => {
    dispatch(popCoffeeItemToCart(coffeeItem))
  }

  return (
    <CoffeeMarketContext.Provider
      value={{
        coffeeItems,
        cartCoffeeItems: cartCoffeeItemsState,
        handleAddCoffeeItemToCart,
        handleRemoveCoffeeItemToCart,
        handlePopCoffeeItemToCart,
        amountOfItensInCart,
      }}
    >
      {children}
    </CoffeeMarketContext.Provider>
  )
}
