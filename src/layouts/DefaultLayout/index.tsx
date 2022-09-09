import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../../components'

import { LayoutContainer } from './styles'

export const DefaultLayout = () => (
  <LayoutContainer>
    <HeaderComponent />
    <Outlet />
  </LayoutContainer>
)
