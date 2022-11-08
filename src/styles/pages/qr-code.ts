import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  minHeight: 'calc(100vh - 32px)',
  margin: '1rem',
  borderRadius: '6px',
  padding: '1rem',

  background: '$gray800',

  '@lg': {
    maxWidth: 460,
    margin: '1rem auto',
    minHeight: 'unset',
    gap: '2rem',
  },

  img: {
    width: '200px',
    height: '200px',
    borderRadius: '6px',

    alignSelf: 'center',

    '@lg': {
      width: '300px',
      height: '300px',
    },
  },

  h3: {
    fontSize: '$md',
    textAlign: 'left',
  },

  p: {
    fontSize: '$sm',
  },

  span: {
    fontSize: '$sm',
    color: '$gray300',
    alignSelf: 'center',
  },
});

export const QrCodeBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 'auto',
});
