import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import styles from './styles'
import Logo from '../../assets/logo-coffee-delivery.svg'

const { Header } = styles

export const HeaderComponent = () => (
  <Header>
    <img src={Logo} alt="" />
    <nav>
      <NavLink
        to="/"
        title="Coffee-Market"
        color="#EBE5F9"
        className={'coffee-market'}
      >
        <MapPin size={24} color={'#8047F8'} fill={'#8047F8'} />
        <p>Porto Alegre, RS</p>
      </NavLink>
      <NavLink to="/cart" title="Cart" color="#F1E9C9" className={'cart'}>
        <ShoppingCart size={24} color={'#C47F17'} fill={'#C47F17'} />
      </NavLink>
    </nav>
  </Header>
)
