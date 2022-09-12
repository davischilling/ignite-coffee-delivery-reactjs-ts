import styled from 'styled-components'

export default {
  DivWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 5rem 10rem;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 30.75rem;
      height: 18.3125rem;
    }
  `,

  DivOrderTimeline: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 132px 40px 40px;
    gap: 32px;
    box-sizing: border-box;
    border-radius: 6px 36px;
    border: 1px solid ${(props) => props.theme.yellow};
  `,

  DivTimelineItem: styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
  `,

  DivText: styled.div`
    flex: 1;
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
