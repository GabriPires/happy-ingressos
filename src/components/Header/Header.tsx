import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { List, SignOut, User } from 'phosphor-react';
import {
  EVENTS_ROUTE,
  LOGIN_ROUTE,
  MY_TICKETS_ROUTE,
  PROFILE_ROUTE,
  PROMOTER_SIGNUP_ROUTE,
  SIGNUP_ROUTE,
} from '../../constants/routes';
import { useAuth } from '../../contexts/AuthContext';
import { HeaderModal } from '../HeaderModal/HeaderModal';
import { IconButton } from '../IconButton/IconButton';
import { LinkButton } from '../LinkButton/LinkButton';
import {
  DesktopLinkContainer,
  HeaderContainer,
  HeaderContent,
  HeaderLink,
  ModalTriggerButton,
} from './styles';

export const Header = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Link href={'/'} title={'Voltar para página inicial'} passHref>
            <h1>happy ingressos :D</h1>
          </Link>

          <DesktopLinkContainer>
            <HeaderLink href={EVENTS_ROUTE}>Eventos</HeaderLink>
            {isAuthenticated ? (
              <HeaderLink href={MY_TICKETS_ROUTE}>Meus ingressos</HeaderLink>
            ) : (
              <>
                <HeaderLink href={LOGIN_ROUTE}>Entrar</HeaderLink>
                <HeaderLink href={SIGNUP_ROUTE}>Cadastre-se</HeaderLink>
              </>
            )}
            <LinkButton href={PROMOTER_SIGNUP_ROUTE} title={'Sair'}>
              Crie seu evento
            </LinkButton>
            {isAuthenticated && (
              <>
                <Link
                  href={PROFILE_ROUTE}
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <IconButton title={'Meu perfil'}>
                    <User size={24} />
                  </IconButton>
                </Link>
                <IconButton onClick={handleLogout} title={'Desconectar'}>
                  <SignOut size={24} />
                </IconButton>
              </>
            )}
          </DesktopLinkContainer>
          <Dialog.Root>
            <Dialog.DialogTrigger asChild>
              <ModalTriggerButton>
                <List size={32} />
              </ModalTriggerButton>
            </Dialog.DialogTrigger>

            <HeaderModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};
