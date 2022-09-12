import styled from 'styled-components'

export default {
  DivWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 2.5rem 10rem;
    gap: 2rem;

    h2 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  `,
  DivPayment: styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    gap: 0.75rem;
  `,
  DivPaymentInfosWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    padding: 40px;
    gap: 32px;
  `,

  DivPaymentInfos: styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
  `,

  DivText: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
  `,

  SpanTitle: styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  `,
  SpanSubtitle: styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  `,

  DivFormWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    span {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
  `,

  DivPaymentTypeWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    padding: 40px;
    gap: 32px;
  `,

  DivPaymentTypeSelect: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  `,

  DivOrderWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `,

  DivOrder: styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px;
  `,

  DivConfirmOrderWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  `,

  DivItemsInfo: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  BtnCorfirmOrder: styled.button`
    flex: 1;
    background-color: ${(props) => props.theme.yellow};
    padding: 12px 0;
    border-radius: 6px;
    color: ${(props) => props.theme.white};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    border: 0;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  `,
}
