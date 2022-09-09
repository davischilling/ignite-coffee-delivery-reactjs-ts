import styles from './styles'
import CoffeeHeader from '../../assets/coffee-header.svg'

const { DivWrapper, DivHeaderWrapper, DivHeader, DivList, DivText, DivIcons } =
  styles

export const CoffeeMarketPage = () => (
  <DivWrapper>
    <DivHeaderWrapper>
      <DivHeader>
        <DivText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </DivText>
        <DivIcons>
          <span>Compra simples e segura</span>
          <span>Embalagem mantém o café intacto</span>
          <span>Entrega rápida e rastreada</span>
          <span>O café chega fresquinho até você</span>
        </DivIcons>
      </DivHeader>
      <img src={CoffeeHeader} alt="" />
    </DivHeaderWrapper>
    <DivList>
      <h1>Coffee Market</h1>
    </DivList>
  </DivWrapper>
)
