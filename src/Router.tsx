import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { CartPage, CoffeeMarketPage } from './pages'

export const Router = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<CoffeeMarketPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  </Routes>
)
