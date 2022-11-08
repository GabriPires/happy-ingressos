import * as Dialog from '@radix-ui/react-dialog';
import { SignOut, X } from 'phosphor-react';
import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  PROMOTER_SIGNUP_ROUTE,
  MY_TICKETS_ROUTE,
} from '../../constants/routes';
import { useAuth } from '../../contexts/AuthContext';
import { LinkButton } from '../LinkButton/LinkButton';
import {
  CloseButton,
  Content,
  ModalLink,
  ModalLogoutButton,
  Overlay,
} from './styles';

export const HeaderModal = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          {isAuthenticated ? (
            <ModalLink href={MY_TICKETS_ROUTE}>Seus ingressos</ModalLink>
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
            <ModalLogoutButton onClick={handleLogout}>
              <SignOut size={24} />
              Desconectar
            </ModalLogoutButton>
          )}
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </span>
      </Content>
    </Dialog.Portal>
  );
};
