import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  PROMOTER_SIGNUP_ROUTE,
} from '../../constants/routes';
import { LinkButton } from '../LinkButton/LinkButton';
import { CloseButton, Content, ModalLink, Overlay } from './styles';

export const HeaderModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          <ModalLink href={LOGIN_ROUTE}>Entrar</ModalLink>
          <ModalLink href={SIGNUP_ROUTE}>Cadastre-se</ModalLink>
        </div>
        <span>
          <LinkButton href={PROMOTER_SIGNUP_ROUTE}>Crie seu evento</LinkButton>
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </span>
      </Content>
    </Dialog.Portal>
  );
};
