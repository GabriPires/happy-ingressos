import Head from 'next/head';
import { useRouter } from 'next/router';
import { X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { EventCard } from '../../components/EventCard/EventCard';
import { Header } from '../../components/Header/Header';
import { IconButton } from '../../components/IconButton/IconButton';
import {
  SearchEventsForm,
  SearchEventsFormData,
} from '../../components/SearchEventsForm/SearchEventsForm';
import { EVENTS_ROUTE } from '../../constants/routes';
import { PAGE_HEADER_SUFFIX } from '../../constants/title';
import {
  Container,
  EventsList,
  SearchedText,
} from '../../styles/pages/search-events';

export default function EventsPage() {
  const { query } = useRouter();

  const [search, setSearch] = useState(() => {
    if (typeof query.event === 'string') {
      return query.event;
    }
    return '';
  });

  useEffect(() => {
    if (typeof query.event === 'string') {
      setSearch(query.event);
    }
  }, [query.event]);

  const handleSearchEvents = (data: SearchEventsFormData) => {
    setSearch(data.search);
  };

  return (
    <>
      <Head>
        <title>{`Eventos ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Header />

      <Container>
        <SearchEventsForm onSubmit={handleSearchEvents} />

        {search && (
          <SearchedText>
            <p>
              Resultados para
              <strong>{` "${search}"`}</strong>
            </p>
            <IconButton onClick={() => setSearch('')}>
              <X size={16} />
            </IconButton>
          </SearchedText>
        )}

        <EventsList>
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
          <EventCard href={`${EVENTS_ROUTE}/show`} />
        </EventsList>
      </Container>
    </>
  );
}
