import Head from 'next/head';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import { PAGE_HEADER_SUFFIX } from '../../constants/title';
import { Container, QrCodeBox } from '../../styles/pages/qr-code';

export default function QrCode() {
  return (
    <>
      <Head>
        <title>{`Meu ingresso ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Container>
        <Image
          src="https://picsum.photos/500/500"
          alt="Banner do evento"
          width={500}
          height={500}
        />

        <h3>Aviso!</h3>
        <p>
          Este ingresso só pode ser utilizado em uma única vez na entrada do
          evento, quaisquer tipo de utilização do mesmo após o primeiro uso
          invalidará o ingresso e restringirá o acesso ao evento
        </p>

        <QrCodeBox>
          <QRCode
            size={256}
            style={{
              height: 'auto',
              maxWidth: '256px',
              width: '100%',
            }}
            value={'código maluco e único do ingresso aqui'}
            viewBox={`0 0 256 256`}
          />
        </QrCodeBox>
        <span>(5763a9066ed343e4ad5b448dab568bd5)</span>
      </Container>
    </>
  );
}
