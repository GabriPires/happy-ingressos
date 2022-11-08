import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: 'calc(100vh - 99px)',

  '@lg': {
    maxWidth: 1180,
    margin: '0 auto',
  },
});

export const EventSummary = styled('div', {
  display: 'grid',
  gridTemplateColumns: '0.75fr 1fr',
  gridTemplateRows: '1fr',
  justifyContent: 'center',
  alignItems: 'center',
  gridColumnGap: '1rem',

  background: '$gray800',
  padding: '1rem',

  img: {
    objectFit: 'cover',
    width: '150px',
    height: '150px',

    borderRadius: '6px',
  },

  '@lg': {
    gridTemplateColumns: 'auto 1fr',

    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',

    img: {
      width: '200px',
      height: '200px',
    },
  },
});

export const EventDetails = styled('div', {
  gridColumn: '2',
  gridRow: '1',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gridRowGap: '0.5rem',

  h1: {
    fontSize: '$md',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  span: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridRowGap: '0.5rem',
    gridColumnGap: '0.3rem',
    alignItems: 'center',

    p: {
      fontSize: '$sm',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});

export const CheckoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  marginTop: 16,
  paddingInline: '8px',

  paddingBottom: '1rem',

  '@lg': {
    paddingInline: 0,
  },
});

export const TicketInput = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginTop: 16,

  background: '$gray800',
  padding: '1rem',
  borderRadius: '6px',

  p: {
    fontSize: '$md',
    fontWeight: 'bold',
  },

  div: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',

    span: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: '35px',
      height: '35px',

      borderRadius: '6px',
      background: '$gray900',
      color: '$white',
      fontSize: '$md',
      fontWeight: '$medium',
    },

    button: {
      background: 'none',
      border: 'none',
      color: '$gray300',
      cursor: 'pointer',

      '&:active': {
        color: '$white',
      },
    },
  },
});

export const TicketLabel = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  h3: {
    fontSize: '$md',
    color: '$white',
  },

  p: {
    fontSize: '$sm',
    color: '$gray300',
  },
});

export const CheckoutSummary = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '1rem',

  background: '$gray800',
  padding: '1rem',
  borderRadius: '6px',

  marginTop: 16,

  h3: {
    fontSize: '$md',
  },

  p: {
    fontSize: '$sm',
  },

  strong: {
    fontSize: '$lg',
  },
});

export const FinishButton = styled('button', {
  marginTop: 16,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  textDecoration: 'none',

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
    width: 'fit-content',
    alignSelf: 'flex-end',
  },
});
