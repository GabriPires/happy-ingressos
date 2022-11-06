import Image from 'next/image';
import { Container } from './styles';

export interface EventCardProps {}

export const EventCard = () => {
  return (
    <Container>
      <Image
        src={'https://picsum.photos/380/210'}
        alt={'Miniatura do evento'}
        width={380}
        height={210}
      />
    </Container>
  );
};
