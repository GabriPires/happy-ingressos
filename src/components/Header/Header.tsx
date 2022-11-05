import Link from 'next/link';
import { LOGIN_ROUTE } from '../../constants/routes';
import { LinkButton } from '../LinkButton/LinkButton';
import { HeaderContainer, HeaderContent, HeaderLink } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>happy ingressos :D</h1>

        <div>
          <HeaderLink href={LOGIN_ROUTE}>Entrar</HeaderLink>
          <HeaderLink href={LOGIN_ROUTE}>Cadastre-se</HeaderLink>
          <LinkButton href={LOGIN_ROUTE}>Crie seu evento</LinkButton>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};
