import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, defaultTheme } from './styles'
import { Router } from './Router'
import { CoffeeMarketProvider } from './contexts/CartItems'

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <CoffeeMarketProvider>
        <Router />
      </CoffeeMarketProvider>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
)
