import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',

  '@lg': {
    maxWidth: 1180,
    margin: '0 auto',
  },
});

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',

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
