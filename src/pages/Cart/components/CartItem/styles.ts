import styled from 'styled-components'

export default {
  DivCartItemWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 33.5px;
    margin-bottom: 24px;

    span {
      flex: 1;
      border: 1px solid ${(props) => props.theme['base-button']};
    }
  `,

  DivWrapper: styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    width: 368px;

    img {
      max-width: 4rem;
      max-height: 4rem;
      margin-right: 20px;
    }
  `,

  DivItemEditWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  `,

  DivItemEdit: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      strong {
        margin-top: 10px;
      }
    }
  `,
  BtnRemove: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    text-transform: uppercase;
    cursor: pointer;

    margin-right: 40px;

    @media (max-width: 768px) {
      margin-right: 0;
    }

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-text']};
    }
  `,
}
