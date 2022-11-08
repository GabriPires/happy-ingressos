import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, QrCode } from 'phosphor-react';
import { CustomHeading } from '../components/CustomHeading/CustomHeading';
import { Header } from '../components/Header/Header';
import { IconButton } from '../components/IconButton/IconButton';
import { EVENTS_ROUTE, QR_CODE_ROUTE } from '../constants/routes';
import { PAGE_HEADER_SUFFIX } from '../constants/title';
import {
  Container,
  Ticket,
  TicketDetails,
  TicketsContainer,
} from '../styles/pages/my-tickets';

export default function MyTickets() {
  return (
    <>
      <Head>
        <title>{`Meus ingressos ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Header />

      <Container>
        <CustomHeading>Eventos que estão por vir</CustomHeading>
        <TicketsContainer>
          <Ticket>
            <Image
              src="https://picsum.photos/500/500"
              alt="Banner do evento"
              width={500}
              height={500}
            />
            <TicketDetails>
              <Link href={`${EVENTS_ROUTE}/show`} title={'Página do evento'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ipsam voluptas, voluptatibus perferendis qui quisquam, a beatae
                quidem vitae amet sed ullam ut saepe quam placeat tenetur
                assumenda quia rerum.
              </Link>
              <span>
                <MapPin size={20} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ipsam voluptas, voluptatibus perferendis qui quisquam, a
                  beatae quidem vitae amet sed ullam ut saepe quam placeat
                  tenetur assumenda quia rerum.
                </p>
              </span>
              <span>
                <Calendar size={20} /> 06 de novembro de 2022
              </span>
              <span>
                <Clock size={20} /> 23:00
              </span>
            </TicketDetails>
            <Link href={`${QR_CODE_ROUTE}/show`} passHref>
              <IconButton title="Visualizar QR Code do ingresso">
                <QrCode />
              </IconButton>
            </Link>
          </Ticket>

          <Ticket>
            <Image
              src="https://picsum.photos/500/500"
              alt="Banner do evento"
              width={500}
              height={500}
            />
            <TicketDetails>
              <Link href={`${EVENTS_ROUTE}/show`} title={'Página do evento'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ipsam voluptas, voluptatibus perferendis qui quisquam, a beatae
                quidem vitae amet sed ullam ut saepe quam placeat tenetur
                assumenda quia rerum.
              </Link>
              <span>
                <MapPin size={20} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ipsam voluptas, voluptatibus perferendis qui quisquam, a
                  beatae quidem vitae amet sed ullam ut saepe quam placeat
                  tenetur assumenda quia rerum.
                </p>
              </span>
              <span>
                <Calendar size={20} /> 06 de novembro de 2022
              </span>
              <span>
                <Clock size={20} /> 23:00
              </span>
            </TicketDetails>
            <Link href={`${QR_CODE_ROUTE}/show`} passHref>
              <IconButton title="Visualizar QR Code do ingresso">
                <QrCode />
              </IconButton>
            </Link>
          </Ticket>

          <Ticket>
            <Image
              src="https://picsum.photos/500/500"
              alt="Banner do evento"
              width={500}
              height={500}
            />
            <TicketDetails>
              <Link href={`${EVENTS_ROUTE}/show`} title={'Página do evento'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ipsam voluptas, voluptatibus perferendis qui quisquam, a beatae
                quidem vitae amet sed ullam ut saepe quam placeat tenetur
                assumenda quia rerum.
              </Link>
              <span>
                <MapPin size={20} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ipsam voluptas, voluptatibus perferendis qui quisquam, a
                  beatae quidem vitae amet sed ullam ut saepe quam placeat
                  tenetur assumenda quia rerum.
                </p>
              </span>
              <span>
                <Calendar size={20} /> 06 de novembro de 2022
              </span>
              <span>
                <Clock size={20} /> 23:00
              </span>
            </TicketDetails>
            <Link href={`${QR_CODE_ROUTE}/show`} passHref>
              <IconButton title="Visualizar QR Code do ingresso">
                <QrCode />
              </IconButton>
            </Link>
          </Ticket>
        </TicketsContainer>

        <CustomHeading>Eventos que passaram</CustomHeading>
        <TicketsContainer>
          <Ticket>
            <Image
              src="https://picsum.photos/500/500"
              alt="Banner do evento"
              width={500}
              height={500}
            />
            <TicketDetails>
              <Link href={`${EVENTS_ROUTE}/show`} title={'Página do evento'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ipsam voluptas, voluptatibus perferendis qui quisquam, a beatae
                quidem vitae amet sed ullam ut saepe quam placeat tenetur
                assumenda quia rerum.
              </Link>
              <span>
                <MapPin size={20} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ipsam voluptas, voluptatibus perferendis qui quisquam, a
                  beatae quidem vitae amet sed ullam ut saepe quam placeat
                  tenetur assumenda quia rerum.
                </p>
              </span>
              <span>
                <Calendar size={20} /> 06 de novembro de 2022
              </span>
              <span>
                <Clock size={20} /> 23:00
              </span>
            </TicketDetails>
          </Ticket>

          <Ticket>
            <Image
              src="https://picsum.photos/500/500"
              alt="Banner do evento"
              width={500}
              height={500}
            />
            <TicketDetails>
              <Link href={`${EVENTS_ROUTE}/show`} title={'Página do evento'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ipsam voluptas, voluptatibus perferendis qui quisquam, a beatae
                quidem vitae amet sed ullam ut saepe quam placeat tenetur
                assumenda quia rerum.
              </Link>
              <span>
                <MapPin size={20} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ipsam voluptas, voluptatibus perferendis qui quisquam, a
                  beatae quidem vitae amet sed ullam ut saepe quam placeat
                  tenetur assumenda quia rerum.
                </p>
              </span>
              <span>
                <Calendar size={20} /> 06 de novembro de 2022
              </span>
              <span>
                <Clock size={20} /> 23:00
              </span>
            </TicketDetails>
          </Ticket>

          <Ticket>
            <Image
              src="https://picsum.photos/500/500"
              alt="Banner do evento"
              width={500}
              height={500}
            />
            <TicketDetails>
              <Link href={`${EVENTS_ROUTE}/show`} title={'Página do evento'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ipsam voluptas, voluptatibus perferendis qui quisquam, a beatae
                quidem vitae amet sed ullam ut saepe quam placeat tenetur
                assumenda quia rerum.
              </Link>
              <span>
                <MapPin size={20} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ipsam voluptas, voluptatibus perferendis qui quisquam, a
                  beatae quidem vitae amet sed ullam ut saepe quam placeat
                  tenetur assumenda quia rerum.
                </p>
              </span>
              <span>
                <Calendar size={20} /> 06 de novembro de 2022
              </span>
              <span>
                <Clock size={20} /> 23:00
              </span>
            </TicketDetails>
          </Ticket>
        </TicketsContainer>
      </Container>
    </>
  );
}
