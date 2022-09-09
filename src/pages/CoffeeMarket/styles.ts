import styled from 'styled-components'

export default {
  DivWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5.75rem 10rem;
  `,
  DivHeaderWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3.5rem;
    line-height: 1.5;
  `,
  DivHeader: styled.div`
    display: flex;
    flex-direction: column;
  `,

  DivText: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  DivIcons: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4.125rem;

    span {
      flex: 50%;
    }
  `,
  DivList: styled.div``,
}
