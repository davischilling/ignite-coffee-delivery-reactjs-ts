import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-with: 768px) {
  html {
    font-size: 87.5%;
  }
}

body {
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
  ::-webkit-scrollbar {
    display: none;
  }
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`
