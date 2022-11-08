import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { SignOut, User, X } from 'phosphor-react';
import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  PROMOTER_SIGNUP_ROUTE,
  MY_TICKETS_ROUTE,
  EVENTS_ROUTE,
  PROFILE_ROUTE,
} from '../../constants/routes';
import { useAuth } from '../../contexts/AuthContext';
import { LinkButton } from '../LinkButton/LinkButton';
import {
  CloseButton,
  Content,
  ModalLink,
  ModalButtonWithIcon,
  Overlay,
} from './styles';

export const HeaderModal = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          <ModalLink href={'/'}>Página inicial</ModalLink>
          {isAuthenticated ? (
            <>
              <ModalLink href={EVENTS_ROUTE}>Eventos</ModalLink>
              <ModalLink href={MY_TICKETS_ROUTE}>Meus ingressos</ModalLink>
            </>
          ) : (
            <>
              <ModalLink href={LOGIN_ROUTE}>Entrar</ModalLink>
              <ModalLink href={SIGNUP_ROUTE}>Cadastre-se</ModalLink>
            </>
          )}
        </div>
        <span>
          <LinkButton href={PROMOTER_SIGNUP_ROUTE}>Crie seu evento</LinkButton>
          {isAuthenticated && (
            <>
              <Link
                href={PROFILE_ROUTE}
                passHref
                style={{ textDecoration: 'none' }}
              >
                <ModalButtonWithIcon>
                  <User size={24} />
                  Meu perfil
                </ModalButtonWithIcon>
              </Link>
              <ModalButtonWithIcon onClick={handleLogout}>
                <SignOut size={24} />
                Desconectar
              </ModalButtonWithIcon>
            </>
          )}
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </span>
      </Content>
    </Dialog.Portal>
  );
};
