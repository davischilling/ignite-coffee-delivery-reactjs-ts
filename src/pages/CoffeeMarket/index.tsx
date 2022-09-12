import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import styles from './styles'
import CoffeeHeader from '../../assets/coffee-header.svg'
import { CoffeeCard } from './components'
import { IconComponent } from '../../components'

const {
  DivWrapper,
  DivHeaderWrapper,
  DivHeader,
  DivList,
  DivText,
  DivIcons,
  DivIcon,
} = styles

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
          <DivIcon>
            <IconComponent
              size={32}
              type="cart"
              icon={<ShoppingCart size={24} color={'#fff'} weight="fill" />}
            />
            <p>Compra simples e segura</p>
          </DivIcon>
          <DivIcon>
            <IconComponent
              size={32}
              type="package"
              icon={<Package size={24} color={'#fff'} weight="fill" />}
            />
            <p>Embalagem mantém o café intacto</p>
          </DivIcon>
          <DivIcon>
            <IconComponent
              size={32}
              type="timer"
              icon={<Timer size={24} color={'#fff'} weight="fill" />}
            />
            <p>Entrega rápida e rastreada</p>
          </DivIcon>
          <DivIcon>
            <IconComponent
              size={32}
              type="coffee"
              icon={<Coffee size={24} color={'#fff'} weight="fill" />}
            />
            <p>O café chega fresquinho até você</p>
          </DivIcon>
        </DivIcons>
      </DivHeader>
      <img src={CoffeeHeader} alt="" />
    </DivHeaderWrapper>
    <h2>Nossos cafés</h2>
    <DivList>
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </DivList>
  </DivWrapper>
)
