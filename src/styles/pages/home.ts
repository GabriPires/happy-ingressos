import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',

  '@lg': {
    maxWidth: 1180,
    margin: '0 auto',
  },
});

export const Content = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflow: 'hidden',

  width: '100%',

  '@lg': {
    alignItems: 'center',
  },
});

export const Sector = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',

  width: '100%',
  marginTop: '2rem',
});

export const EventsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(290px, auto))',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  width: '100%',

  '@lg': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, auto))',
    justifyContent: 'flex-start',
  },
});
