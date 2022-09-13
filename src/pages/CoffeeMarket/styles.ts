import styled from 'styled-components'

export default {
  DivWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3% 10%;

    @media (max-width: 768px) {
      padding: 3% 6%;
    }

    h2 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
      margin: 5% 0 54px 0;
    }
  `,
  DivHeaderWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3%;
    flex-wrap: wrap;
    gap: 56px;

    img {
      max-width: 96%;
      right: 0;
    }
  `,
  DivHeader: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,

  DivText: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
      font-stretch: 100;
    }
  `,
  DivIcons: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4.125rem;
  `,

  DivIcon: styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    flex: 50%;
    margin-bottom: 1.25rem;
    justify-content: left;
    align-items: center;
  `,

  DivList: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
  `,
}
