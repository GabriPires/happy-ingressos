import Head from 'next/head';
import Image from 'next/image';
import { CalendarBlank, Clock, MapPin } from 'phosphor-react';
import { Header } from '../../components/Header/Header';
import { PAGE_HEADER_SUFFIX } from '../../constants/title';
import {
  BuyButton,
  Container,
  EventContent,
  EventDetails,
  EventHeader,
  MobileBuyContainer,
} from '../../styles/pages/eventDetails';

export default function EventPage() {
  return (
    <>
      <Head>
        <title>{`Detalhes do evento ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Header />

      <Container>
        <EventHeader>
          <Image
            src="https://picsum.photos/500/500"
            alt="Banner do evento"
            width={500}
            height={500}
          />
          <EventDetails>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              maiores ratione numquam laboriosam magnam, commodi accusantium
              quisquam voluptatem atque voluptates aperiam unde sed rem suscipit
              molestias. Culpa quae in cumque!
            </h1>
            <span>
              <MapPin size={22} />
              <p>Local do evento</p>
            </span>
            <span>
              <CalendarBlank size={22} /> 06 de novembro de 2022
              <Clock size={22} /> 23:00
            </span>

            <BuyButton>Comprar ingressos</BuyButton>
          </EventDetails>
        </EventHeader>

        <EventContent>
          <h3>Detalhes do evento</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, neque quidem quae maiores adipisci laborum in rem vero,
            illo aliquam accusamus laboriosam quod fugiat ducimus, voluptatibus
            atque labore earum. Excepturi! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aspernatur, neque quidem quae maiores
            adipisci laborum in rem vero, illo aliquam accusamus laboriosam quod
            fugiat ducimus, voluptatibus atque labore earum. Excepturi!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, neque quidem quae maiores adipisci laborum in rem vero,
            illo aliquam accusamus laboriosam quod fugiat ducimus, voluptatibus
            atque labore earum. Excepturi! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aspernatur, neque quidem quae maiores
            adipisci laborum in rem vero, illo aliquam accusamus laboriosam quod
            fugiat ducimus, voluptatibus atque labore earum. Excepturi!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, neque quidem quae maiores adipisci laborum in rem vero,
            illo aliquam accusamus laboriosam quod fugiat ducimus, voluptatibus
            atque labore earum. Excepturi! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aspernatur, neque quidem quae maiores
            adipisci laborum in rem vero, illo aliquam accusamus laboriosam quod
            fugiat ducimus, voluptatibus atque labore earum. Excepturi!
          </p>

          <h3>Política de reembolso</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, neque quidem quae maiores adipisci laborum in rem vero,
            illo aliquam accusamus laboriosam quod fugiat ducimus, voluptatibus
            atque labore earum. Excepturi! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aspernatur, neque quidem quae maiores
            adipisci laborum in rem vero, illo aliquam accusamus laboriosam quod
            fugiat ducimus, voluptatibus atque labore earum. Excepturi!
          </p>
        </EventContent>

        <MobileBuyContainer>
          <BuyButton>Comprar ingressos</BuyButton>
        </MobileBuyContainer>
      </Container>
    </>
  );
}
