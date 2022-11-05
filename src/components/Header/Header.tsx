import * as Dialog from '@radix-ui/react-dialog';
import { List } from 'phosphor-react';
import {
  LOGIN_ROUTE,
  PROMOTER_SIGNUP_ROUTE,
  SIGNUP_ROUTE,
} from '../../constants/routes';
import { HeaderModal } from '../HeaderModal/HeaderModal';
import { LinkButton } from '../LinkButton/LinkButton';
import {
  DesktopLinkContainer,
  HeaderContainer,
  HeaderContent,
  HeaderLink,
  ModalTriggerButton,
} from './styles';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <h1>happy ingressos :D</h1>

          <DesktopLinkContainer>
            <HeaderLink href={LOGIN_ROUTE}>Entrar</HeaderLink>
            <HeaderLink href={SIGNUP_ROUTE}>Cadastre-se</HeaderLink>
            <LinkButton href={PROMOTER_SIGNUP_ROUTE}>
              Crie seu evento
            </LinkButton>
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
