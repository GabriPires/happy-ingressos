import Head from 'next/head';
import Image from 'next/image';
import { CalendarBlank, Clock, MapPin, Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { CustomHeading } from '../../components/CustomHeading/CustomHeading';
import { Header } from '../../components/Header/Header';
import { PAGE_HEADER_SUFFIX } from '../../constants/title';
import {
  CheckoutContainer,
  CheckoutSummary,
  Container,
  EventDetails,
  EventSummary,
  FinishButton,
  TicketInput,
  TicketLabel,
} from '../../styles/pages/checkout';

export default function CheckoutPage() {
  const [halfPriceTickets, setHalfPriceTickets] = useState(0);
  const [fullPriceTickets, setFullPriceTickets] = useState(0);

  const ticketPrice = 5000; // R$ 50,00;
  const ticketTax = 0.1; // 10% de taxa

  const totalPrice =
    (fullPriceTickets * ticketPrice) / 100 +
    (ticketPrice / 100) * ticketTax * fullPriceTickets +
    (halfPriceTickets * ticketPrice) / 2 / 100 +
    (ticketPrice / 100) * ticketTax * (halfPriceTickets / 2);

  const increaseTickets = (type: 'half' | 'full') => {
    if (type === 'half') {
      setHalfPriceTickets(halfPriceTickets + 1);
    } else {
      setFullPriceTickets(fullPriceTickets + 1);
    }
  };

  const decreaseTickets = (type: 'half' | 'full') => {
    if (type === 'half') {
      if (halfPriceTickets > 0) {
        setHalfPriceTickets(halfPriceTickets - 1);
      }
    } else {
      if (fullPriceTickets > 0) {
        setFullPriceTickets(fullPriceTickets - 1);
      }
    }
  };

  return (
    <>
      <Head>
        <title>{`Checkout ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Header />

      <Container>
        <EventSummary>
          <Image
            src="https://picsum.photos/500/500"
            alt="Banner do evento"
            width={500}
            height={500}
          />
          <EventDetails>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              ipsa facere, voluptas dolores est dolorum qui tenetur esse
              temporibus quibusdam delectus et. Illo necessitatibus asperiores
              cum eaque? Provident, necessitatibus ad.
            </h1>
            <span>
              <MapPin size={22} />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis, voluptatem? Eveniet et laudantium labore, ratione amet
                deserunt rerum quia neque voluptatibus doloremque sunt quisquam
                eligendi itaque recusandae omnis deleniti sapiente.
              </p>
            </span>
            <span>
              <CalendarBlank size={22} /> 06 de novembro de 2022
              <Clock size={22} /> 23:00
            </span>
          </EventDetails>
        </EventSummary>

        <CheckoutContainer>
          <CustomHeading>Ingressos</CustomHeading>
          <TicketInput>
            <TicketLabel>
              <h3>Meia</h3>
              <p>1º Lote</p>
            </TicketLabel>
            <div>
              <button onClick={() => decreaseTickets('half')}>
                <Minus size={16} />
              </button>
              <span>{halfPriceTickets}</span>
              <button onClick={() => increaseTickets('half')}>
                <Plus size={16} />
              </button>
            </div>
          </TicketInput>
          <TicketInput>
            <TicketLabel>
              <h3>Inteira</h3>
              <p>1º Lote</p>
            </TicketLabel>
            <div>
              <button onClick={() => decreaseTickets('full')}>
                <Minus size={16} />
              </button>
              <span>{fullPriceTickets}</span>
              <button onClick={() => increaseTickets('full')}>
                <Plus size={16} />
              </button>
            </div>
          </TicketInput>
        </CheckoutContainer>

        <CheckoutContainer>
          <CustomHeading>Resumo da compra</CustomHeading>
          <CheckoutSummary>
            <h3>Meia</h3>

            <p>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format((halfPriceTickets * (ticketPrice / 2)) / 100)}
              {' + '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(
                (ticketPrice / 2 / 100) * ticketTax * halfPriceTickets,
              )}{' '}
            </p>
            <h3>Inteira</h3>
            <p>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format((fullPriceTickets * ticketPrice) / 100)}
              {' + '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(
                (ticketPrice / 100) * ticketTax * fullPriceTickets,
              )}{' '}
              taxa de serviço
            </p>
          </CheckoutSummary>

          <CheckoutSummary>
            <h3>Total</h3>
            <strong>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalPrice)}
            </strong>
          </CheckoutSummary>

          <FinishButton>Finalizar compra</FinishButton>
        </CheckoutContainer>
      </Container>
    </>
  );
}
