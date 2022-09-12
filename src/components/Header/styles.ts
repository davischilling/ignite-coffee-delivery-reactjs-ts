import styled from 'styled-components'

export default {
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 33px 10rem 33px 10rem;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: ${(props) => props.theme.white};

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

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme['purple-dark']};
      }

      a:link,
      a:visited {
        color: ${(props) => props.theme['purple-dark']};
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
