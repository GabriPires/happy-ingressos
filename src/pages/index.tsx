import { Header } from '../components/Header/Header';
import { Container, Content } from '../styles/pages/home';
import Head from 'next/head';
import { PAGE_HEADER_SUFFIX } from '../constants/title';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home {PAGE_HEADER_SUFFIX}</title>
      </Head>

      <Header />

      <Container>
        <Content>
          <p>opa</p>
        </Content>
      </Container>
    </>
  );
}
