import Image from 'next/image';
import { Clock, MapPin } from 'phosphor-react';
import { CardContent, EventDate, Container, EventDetails } from './styles';

export interface EventCardProps {
  variant?: 'small' | 'large';
}

export const EventCard = ({ variant = 'small' }: EventCardProps) => {
  return (
    <Container size={variant} href={'/'}>
      <Image
        src={'https://picsum.photos/380/210'}
        alt={'Miniatura do evento'}
        width={380}
        height={210}
      />
      <CardContent>
        <EventDate>
          <p>DOM</p>
          <span>06</span>
          <p>NOV</p>
        </EventDate>

        <EventDetails>
          <h2>Nome do evento</h2>
          <span>
            <MapPin size={22} />
            <p>Local do evento</p>
          </span>
          <span>
            <Clock size={22} /> 23:00
          </span>
        </EventDetails>
      </CardContent>
    </Container>
  );
};
