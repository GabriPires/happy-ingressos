import { Header } from '../components/Header/Header';
import { Container, Content } from '../styles/pages/home';
import Head from 'next/head';
import { PAGE_HEADER_SUFFIX } from '../constants/title';
import {
  SearchEventsForm,
  SearchEventsFormData,
} from '../components/SearchEventsForm/SearchEventsForm';

export default function Home() {
  const handleSearchEvents = (data: SearchEventsFormData) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Home {PAGE_HEADER_SUFFIX}</title>
      </Head>

      <Header />

      <Container>
        <Content>
          <SearchEventsForm onSubmit={handleSearchEvents} />
        </Content>
      </Container>
    </>
  );
}
