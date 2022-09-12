import styled from 'styled-components'

export default {
  DivWrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 21%;
    width: 16rem;
    height: 19.375rem;
    top: 0;
    left: 0;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px;
    padding: 1.25rem;
  `,

  DivInfos: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.0625rem;

    img {
      margin-top: -2.5rem;
      margin-bottom: 0.75rem;
    }
  `,

  DivTags: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;
      text-transform: uppercase;
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
      padding: 4px 8px;
      border-radius: 100px;
    }
  `,

  SpanName: styled.span`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  `,

  SpanDescription: styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-label']};
  `,

  DivPriceCart: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      text-align: right;
      color: ${(props) => props.theme['base-text']};

      strong {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 130%;
        text-align: right;
        color: ${(props) => props.theme['base-text']};
      }
    }
  `,

  SpanCartBtn: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    cursor: pointer;
    flex-grow: 0;
  `,
}
