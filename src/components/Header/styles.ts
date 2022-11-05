import Link from 'next/link';
import { styled } from '../../styles';

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',

  background: '$gray800',
});

export const HeaderContent = styled('div', {
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
});

export const HeaderLink = styled(Link, {
  color: '$white',
  textDecoration: 'none',

  fontSize: '$md',

  '&:hover': {
    textDecoration: 'underline',
  },
});
