import styled, { css } from 'styled-components'

interface IsActive {
  isActive: boolean
}

export default {
  Button: styled.button<IsActive>`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    max-width: 100%;
    flex: 1;
    gap: 12px;
    padding: 17.5px 16px;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    cursor: pointer;
    /* border: 1px solid transparent; */

    :hover {
      ${(props) => css`
        background-color: ${!props.isActive
          ? props.theme['base-hover']
          : props.theme['purple-light']};
      `}
    }

    ${(props) => css`
      background-color: ${props.isActive
        ? props.theme['purple-light']
        : props.theme['base-button']};
      border: 1px solid ${props.isActive ? props.theme.purple : 'transparent'};
    `}
  `,
}
