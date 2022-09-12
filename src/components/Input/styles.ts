import styled, { css } from 'styled-components'

interface sizeProps {
  size: number
}

export default {
  Input: styled.input<sizeProps>`
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    background-color: ${(props) => props.theme['base-input']};
    ${({ size }) => css`
      width: ${size / 16}rem;
    `};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  `,
}
