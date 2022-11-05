import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',

  '@lg': {
    maxWidth: 1180,
    margin: '0 auto',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
});

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  width: '100%',

  paddingInline: '32px',

  '@lg': {
    width: '450px',
  },

  h1: {
    fontSize: '$xl',
    textAlign: 'center',
    marginBottom: '32px',
  },

  button: {
    width: '100%',
    height: '40px',

    marginTop: '16px',

    border: 'none',
    background: '$primary',
    color: '$white',
    borderRadius: '4px',
    fontSize: '$md',
    fontWeight: '$medium',
    cursor: 'pointer',

    transition: 'all 0.2s',

    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },

  a: {
    fontSize: '$md',
    color: '$primary',
    textDecoration: 'none',
    marginTop: '16px',
  },

  span: {
    fontSize: '$md',
    color: '$gray100',
    marginTop: '16px',
  },
});

export const DesktopContent = styled('div', {
  gridColumn: 2,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
