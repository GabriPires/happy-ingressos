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

  width: '100%',
});
