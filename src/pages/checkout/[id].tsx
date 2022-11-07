import Head from 'next/head';
import Image from 'next/image';
import { CalendarBlank, Clock, MapPin, Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { CustomHeading } from '../../components/CustomHeading/CustomHeading';
import { Header } from '../../components/Header/Header';
import { PAGE_HEADER_SUFFIX } from '../../constants/title';
import {
  CheckoutContainer,
  Container,
  EventDetails,
  EventSummary,
  TicketInput,
} from '../../styles/pages/checkout';

export default function CheckoutPage() {
  const [halfPriceTickets, setHalfPriceTickets] = useState(0);
  const [fullPriceTickets, setFullPriceTickets] = useState(0);

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
            <p>Meia</p>
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
            <p>Inteira</p>
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
        </CheckoutContainer>
      </Container>
    </>
  );
}
