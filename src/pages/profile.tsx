import Head from 'next/head';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { Envelope, Phone, Trash, X } from 'phosphor-react';
import { CustomHeading } from '../components/CustomHeading/CustomHeading';
import { Header } from '../components/Header/Header';
import { PAGE_HEADER_SUFFIX } from '../constants/title';
import {
  Container,
  DeleteAccountButton,
  ProfileDetails,
  ProfileHeader,
  ProfileInfo,
} from '../styles/pages/profile';

export default function Profile() {
  return (
    <>
      <Head>
        <title>{`Meu perfil ${PAGE_HEADER_SUFFIX}`}</title>
      </Head>

      <Header />

      <Container>
        <ProfileHeader>
          <Image
            src={'https://i.pravatar.cc/200'}
            alt="Foto de perfil"
            width={200}
            height={200}
          />
          <h1>Nome do usuário</h1>
        </ProfileHeader>

        <CustomHeading>Informações pessoais</CustomHeading>
        <ProfileDetails>
          <ProfileInfo>
            <Envelope size={20} />
            email@email.com
          </ProfileInfo>

          <ProfileInfo>
            <Phone size={20} />
            (11) 11111-1111
          </ProfileInfo>
        </ProfileDetails>

        <CustomHeading>Informações da conta</CustomHeading>
        <ProfileDetails>
          <ProfileInfo>
            <strong>Membro desde</strong>
            02/11/2022
          </ProfileInfo>
          <Dialog.Root>
            <Dialog.DialogTrigger asChild>
              <DeleteAccountButton>
                <Trash size={20} />
                Excluir conta
              </DeleteAccountButton>
            </Dialog.DialogTrigger>
          </Dialog.Root>
        </ProfileDetails>
      </Container>
    </>
  );
}
