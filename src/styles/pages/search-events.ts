import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: 'calc(100vh - 99px)',
  marginBottom: '16px',

  '@lg': {
    maxWidth: 1208,
    margin: '0 auto',
    marginBottom: '16px',
  },
});

export const SearchedText = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  marginTop: '16px',
  paddingInline: '16px',

  button: {
    marginLeft: '8px',
    color: '$primary',
  },
});

export const EventsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: 16,
  gap: '1rem',

  '@lg': {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
