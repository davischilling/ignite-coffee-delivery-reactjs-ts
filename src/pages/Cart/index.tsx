import { MapPin, CurrencyDollar, CreditCard } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { BtnTypes, ButtonComponent, InputComponent } from '../../components'
import { CoffeeMarketContext } from '../../contexts/CartItems'
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

interface OrderInfosState {
  delivery: number
  totalValue: number
}

export const CartPage = () => {
  const [btnSelected, setBtnSelected] = useState(BtnTypes.CREDIT)

  const {
    cartCoffeeItems: { cartCoffeeItemsState },
    amountOfItensInCart,
  } = useContext(CoffeeMarketContext)

  const [orderInfos, setOrderInfos] = useState<OrderInfosState>({
    delivery: 3.5,
    totalValue: 0,
  })

  useEffect(() => {
    const total = cartCoffeeItemsState.reduce((previous, current) => {
      return previous + current.cartCoffeeItem.value * current.itemAmount
    }, 0)
    setOrderInfos((state) => {
      return {
        ...state,
        totalValue: total + state.delivery,
      }
    })
  }, [cartCoffeeItemsState])

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
          {cartCoffeeItemsState &&
            cartCoffeeItemsState.map((el) => (
              <CartItemComponent key={el.cartCoffeeItem.id} item={el} />
            ))}
          <DivConfirmOrderWrapper>
            {/* <DivItemsInfo>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </DivItemsInfo> */}
            <DivItemsInfo>
              <span>Entrega</span>
              <span>
                R${' '}
                {amountOfItensInCart
                  ? String(orderInfos.delivery.toFixed(2))
                  : '0.00'}
              </span>
            </DivItemsInfo>
            <DivItemsInfo>
              <span>Valor Total</span>
              <span>
                R${' '}
                {amountOfItensInCart
                  ? String(orderInfos.totalValue.toFixed(2))
                  : '0.00'}
              </span>
            </DivItemsInfo>
          </DivConfirmOrderWrapper>
          <BtnCorfirmOrder>Confirmar pedido</BtnCorfirmOrder>
        </DivOrder>
      </DivOrderWrapper>
    </DivWrapper>
  )
}
