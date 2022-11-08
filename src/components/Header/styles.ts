import Link from 'next/link';
import { styled } from '../../styles';

export const HeaderContainer = styled('header', {
  background: '$gray800',
  width: '100%',

  padding: '1.75rem 0.8rem',

  a: {
    textDecoration: 'none',
    color: '$gray300',
  },

  '@lg': {
    padding: '2rem 0',
  },
});

export const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  h1: {
    fontSize: '$lg',
  },

  '@lg': {
    maxWidth: 1180,
    margin: '0 auto',

    h1: {
      fontSize: '$xl',
    },
  },
});

export const DesktopLinkContainer = styled('div', {
  display: 'none',

  '@lg': {
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

export const ModalTriggerButton = styled('button', {
  background: 'transparent',
  border: 'none',
  borderRadius: '6px',
  color: '$gray300',

  display: 'flex',
  alignItems: 'center',

  '@md': {
    display: 'none',
  },
});

export const IconButton = styled('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$gray300',

  display: 'flex',
  alignItems: 'center',

  transition: 'color 0.2s',

  '&:hover': {
    color: '$white',
  },
});
