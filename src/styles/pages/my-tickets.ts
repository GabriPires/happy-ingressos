import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: 'calc(100vh - 99px)',
  marginTop: 16,

  '@lg': {
    maxWidth: 1180,
    margin: '0 auto',
    marginBottom: 0,
    marginTop: 16,
  },
});

export const TicketsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  paddingInline: '16px',
  marginTop: 16,
  marginBottom: 16,
});

export const Ticket = styled('div', {
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  gridColumnGap: '1rem',
  position: 'relative',

  background: '$gray800',
  borderRadius: '6px',
  padding: '1rem',

  img: {
    width: '100px',
    height: '100px',
  },

  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: '1rem',
    bottom: '1rem',

    svg: {
      width: '30px',
      height: '30px',
    },

    '@lg': {
      svg: {
        width: '40px',
        height: '40px',
      },
    },
  },
});

export const TicketDetails = styled('div', {
  display: 'grid',
  gridRowGap: '0.5rem',

  a: {
    fontSize: '$lg',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '$gray100',
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  span: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridColumnGap: '0.5rem',

    p: {
      fontSize: '$md',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});
