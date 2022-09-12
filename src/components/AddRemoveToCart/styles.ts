import styled from 'styled-components'

export default {
  DivAddRemove: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    padding: 8.5px 8px;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
  `,

  SpanItemCounter: styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  `,
}
