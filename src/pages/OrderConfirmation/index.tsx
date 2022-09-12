import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import styles from './styles'
import OrderIllustration from '../../assets/order-Illustration.svg'
import { IconComponent } from '../../components'

const {
  DivWrapper,
  DivConfirmationMessage,
  DivOrderWrapper,
  DivOrderTimeline,
  DivTimelineItem,
  DivText,
} = styles

export const OrderConfirmationPage = () => (
  <DivWrapper>
    <DivConfirmationMessage>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
    </DivConfirmationMessage>
    <DivOrderWrapper>
      <DivOrderTimeline>
        <DivTimelineItem>
          <IconComponent
            size={32}
            type="location"
            icon={<MapPin size={16} color={'#fff'} weight="fill" />}
          />
          <DivText>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </DivText>
        </DivTimelineItem>
        <DivTimelineItem>
          <IconComponent
            size={32}
            type="timer"
            icon={<Timer size={16} color={'#fff'} weight="fill" />}
          />
          <DivText>
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </DivText>
        </DivTimelineItem>
        <DivTimelineItem>
          <IconComponent
            size={32}
            type="money"
            icon={<CurrencyDollar size={16} color={'#fff'} weight="fill" />}
          />
          <DivText>
            <p>Pagamento na entrega</p>
            <p>
              <strong>Cartão de Crédito</strong>
            </p>
          </DivText>
        </DivTimelineItem>
      </DivOrderTimeline>
      <img src={OrderIllustration} alt="" />
    </DivOrderWrapper>
  </DivWrapper>
)
