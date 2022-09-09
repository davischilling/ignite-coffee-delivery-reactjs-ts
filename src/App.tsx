import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, defaultTheme } from './styles'
import { Router } from './Router'

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
)
