import styled from 'styled-components'

export default {
  DivWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 9.8125rem;

    h2 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
      padding: 0 0 3.375rem 10rem;
    }
  `,
  DivHeaderWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3.5rem;
    line-height: 1.5;
    padding: 5.75rem 10rem;
  `,
  DivHeader: styled.div`
    display: flex;
    flex-direction: column;
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

    span {
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 10px;
      border-radius: 9999px;
    }

    .cart {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    .package {
      background-color: ${(props) => props.theme['base-text']};
    }

    .timer {
      background-color: ${(props) => props.theme.yellow};
    }

    .coffee {
      background-color: ${(props) => props.theme.purple};
    }
  `,

  DivList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0 10rem;
  `,
}
