import { Header } from '../components/Header/Header';
import {
  Container,
  Content,
  EventsContainer,
  Sector,
} from '../styles/pages/home';
import Head from 'next/head';
import { PAGE_HEADER_SUFFIX } from '../constants/title';
import {
  SearchEventsForm,
  SearchEventsFormData,
} from '../components/SearchEventsForm/SearchEventsForm';
import { EventCard } from '../components/EventCard/EventCard';
import { CustomHeading } from '../components/CustomHeading/CustomHeading';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { EVENTS_ROUTE } from '../constants/routes';

export default function Home() {
  const [trendingSliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 32,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });

  const [defaultSliderRef] = useKeenSlider({
    loop: true,
    slides: {
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 1.5,
          spacing: 32,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });

  const handleSearchEvents = (data: SearchEventsFormData) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>{`Home ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Header />

      <Container>
        <Content>
          <SearchEventsForm onSubmit={handleSearchEvents} />

          <Sector>
            <CustomHeading>Em alta</CustomHeading>
            <div className="keen-slider" ref={trendingSliderRef}>
              <EventCard
                variant="large"
                href={`${EVENTS_ROUTE}/show`}
                className={'keen-slider__slide'}
              />
              <EventCard
                variant="large"
                href={`${EVENTS_ROUTE}/show`}
                className={'keen-slider__slide'}
              />
              <EventCard
                variant="large"
                href={`${EVENTS_ROUTE}/show`}
                className={'keen-slider__slide'}
              />
            </div>
          </Sector>

          <Sector>
            <CustomHeading>Pra curtir com os amigos</CustomHeading>
            <EventsContainer>
              <EventCard variant="small" href={`${EVENTS_ROUTE}/show`} />
              <EventCard variant="small" href={`${EVENTS_ROUTE}/show`} />
              <EventCard variant="small" href={`${EVENTS_ROUTE}/show`} />
            </EventsContainer>
          </Sector>
        </Content>
      </Container>
    </>
  );
}
