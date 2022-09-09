import styled from 'styled-components'

export default {
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 33px 10rem 33px 10rem;

    nav {
      display: flex;
      gap: 0.75rem;
      width: 12.0625rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border-radius: 4px;
        border: 0;
        padding: 10px 8px;
        white-space: nowrap;
        text-decoration: none;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        outline: 0;
      }

      a + a {
        margin-left: 12px;
      }

      .coffee-market {
        background-color: ${(props) => props.theme['purple-light']};
      }

      .coffee-market:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
      }

      .coffee-market:not(:focus):hover {
        border-bottom: 3px solid ${(props) => props.theme['purple-dark']};
      }

      .cart {
        background-color: ${(props) => props.theme['yellow-light']};
      }

      .cart:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
      }

      .cart:hover:not(:focus) {
        border-bottom: 3px solid ${(props) => props.theme['yellow-dark']};
      }
    }
  `,
}
