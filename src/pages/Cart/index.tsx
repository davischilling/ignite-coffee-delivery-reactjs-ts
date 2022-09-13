import { MapPin, CurrencyDollar, CreditCard } from 'phosphor-react'
import { useState } from 'react'
import { BtnTypes, ButtonComponent, InputComponent } from '../../components'
import { CartItemComponent } from './components/CartItem'
import styles from './styles'

const {
  DivWrapper,
  DivPaymentWrapper,
  DivOrder,
  DivPaymentInfosWrapper,
  DivPaymentInfos,
  DivPaymentTypeWrapper,
  DivText,
  SpanTitle,
  SpanSubtitle,
  DivFormWrapper,
  DivPaymentTypeSelect,
  DivOrderWrapper,
  DivConfirmOrderWrapper,
  DivItemsInfo,
  BtnCorfirmOrder,
} = styles

export const CartPage = () => {
  const [btnSelected, setBtnSelected] = useState(BtnTypes.CREDIT)
  return (
    <DivWrapper>
      <DivPaymentWrapper>
        <h2>Complete seu pedido</h2>
        <DivPaymentInfosWrapper>
          <DivPaymentInfos>
            <MapPin size={24} color={'#C47F17'} />
            <DivText>
              <SpanTitle>Endereço de entrega</SpanTitle>
              <SpanSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </SpanSubtitle>
            </DivText>
          </DivPaymentInfos>
          <DivFormWrapper>
            <InputComponent text="CEP" />
            <InputComponent text="Rua" />
            <span>
              <InputComponent text="Número" />
              <InputComponent text="Complemento" />
            </span>
            <span>
              <InputComponent text="Bairro" />
              <InputComponent text="Cidade" />
              <InputComponent text="UF" />
            </span>
          </DivFormWrapper>
        </DivPaymentInfosWrapper>
        <DivPaymentTypeWrapper>
          <DivPaymentInfos>
            <CurrencyDollar size={24} color={'#C47F17'} />
            <DivText>
              <SpanTitle>Pagamento</SpanTitle>
              <SpanSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </SpanSubtitle>
            </DivText>
          </DivPaymentInfos>
          <DivPaymentTypeSelect>
            <ButtonComponent
              icon={<CreditCard size={16} />}
              text={'cartão de crédito'}
              selected={btnSelected}
              type={BtnTypes.CREDIT}
            />
            <ButtonComponent
              icon={<CreditCard size={16} />}
              text={'cartão de débito'}
              selected={btnSelected}
              type={BtnTypes.DEBIT}
            />
            <ButtonComponent
              icon={<CreditCard size={16} />}
              text={'dinheiro'}
              selected={btnSelected}
              type={BtnTypes.MONEY}
            />
          </DivPaymentTypeSelect>
        </DivPaymentTypeWrapper>
      </DivPaymentWrapper>
      <DivOrderWrapper>
        <h2>Cafés selecionados</h2>
        <DivOrder>
          <CartItemComponent />
          <CartItemComponent />
          <DivConfirmOrderWrapper>
            <DivItemsInfo>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </DivItemsInfo>
            <DivItemsInfo>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </DivItemsInfo>
            <DivItemsInfo>
              <span>Valor Total</span>
              <span>R$ 33,20</span>
            </DivItemsInfo>
          </DivConfirmOrderWrapper>
          <BtnCorfirmOrder>Confirmar pedido</BtnCorfirmOrder>
        </DivOrder>
      </DivOrderWrapper>
    </DivWrapper>
  )
}
