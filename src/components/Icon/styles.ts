import styled, { css } from 'styled-components'

export type IconTypes =
  | 'cart'
  | 'money'
  | 'package'
  | 'timer'
  | 'coffee'
  | 'location'

export interface IconTypesprops {
  type: IconTypes
  size: number
}

export default {
  Span: styled.span<IconTypesprops>`
    display: flex;
    align-items: center;
    justify-content: left;
    width: ${({ size }) => size / 16}rem;
    height: ${({ size }) => size / 16}rem;
    padding: 10px;
    border-radius: 9999px;

    background-color: ${(props) =>
      props.type === 'cart' || props.type === 'money'
        ? props.theme['yellow-dark']
        : props.type === 'package'
        ? props.theme['base-text']
        : props.type === 'timer'
        ? props.theme.yellow
        : props.type === 'coffee' || props.type === 'location'
        ? props.theme.purple
        : props.theme['base-button']};
  `,
}
