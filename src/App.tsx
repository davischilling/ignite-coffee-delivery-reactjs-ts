import { ThemeProvider } from 'styled-components'
import { GlobalStyle, defaultTheme } from './styles'

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <h1>Hello world</h1>
    <GlobalStyle />
  </ThemeProvider>
)