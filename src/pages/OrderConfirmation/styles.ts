import styled from 'styled-components'

export default {
  DivWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 3% 10%;

    @media (max-width: 768px) {
      padding: 3% 6%;
    }
  `,

  DivConfirmationMessage: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: ${(props) => props.theme['yellow-dark']};
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  `,

  DivOrderWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15%;

    img {
      max-width: 30.75rem;
      max-height: 18.3125rem;
    }

    @media (max-width: 768px) {
      img {
        margin-top: 40px;
        max-width: 100%;
      }
    }
  `,

  DivOrderTimeline: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    padding: 5% 5%;
    gap: 32px;
    box-sizing: border-box;
    border-radius: 6px 36px;
    border: 1px solid ${(props) => props.theme.yellow};

    @media (max-width: 768px) {
      padding: 20% 10%;
    }
  `,

  DivTimelineItem: styled.div`
    display: flex;
    width: 100%;
    gap: 12px;
  `,

  DivText: styled.div`
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  `,
}
