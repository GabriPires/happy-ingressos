import NextLink from 'next/link';
import { styled } from '../../styles';

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: 'none',
  background: '$primary',
  color: '$white',
  height: 35,
  paddingInline: 16,
  borderRadius: '40px',
  cursor: 'pointer',
  textDecoration: 'none',

  fontFamily: 'Roboto',
  fontSize: '$md',
  fontWeight: '$medium',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    filter: 'brightness(0.9)',
  },
});

export const Link = styled(NextLink, {
  textDecoration: 'none',
});
