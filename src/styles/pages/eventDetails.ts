import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: 'calc(100vh - 99px)',
  marginBottom: '100px',

  '@lg': {
    maxWidth: 1180,
    margin: '0 auto',
    marginBottom: 0,
  },
});

export const EventHeader = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  img: {
    objectFit: 'cover',
    width: '100%',
    borderRadius: '6px',
  },

  '@lg': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridColumnGap: '2rem',

    marginTop: 40,
  },
});

export const EventDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  paddingInline: '16px',

  h1: {
    fontSize: '$xl',
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  button: {
    display: 'none',
  },

  '@lg': {
    paddingInline: 0,

    h1: {
      fontSize: '$2xl',
    },

    button: {
      display: 'block',
    },
  },
});

export const EventContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1rem',
  paddingInline: '16px',

  '@lg': {
    paddingInline: 0,
    paddingBottom: '1rem',
  },
});

export const MobileBuyContainer = styled('div', {
  position: 'fixed',

  bottom: 0,
  left: 0,
  right: 0,

  background: '$gray800',
  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@lg': {
    display: 'none',
  },
});

export const BuyButton = styled('button', {
  background: '$primary',
  border: 'none',

  color: '$white',
  fontSize: '$lg',
  fontWeight: 'bold',

  padding: '1rem 2rem',
  borderRadius: '4px',

  cursor: 'pointer',

  transition: 'all 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '@lg': {
    marginTop: 'auto',
  },
});
