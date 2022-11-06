import Link from 'next/link';
import { styled } from '../../styles';

export const Container = styled(Link, {
  display: 'grid',
  gridTemplateRows: '1fr auto',
  alignItems: 'center',
  borderRadius: '8px',
  background: '$gray800',
  textDecoration: 'none',

  variants: {
    size: {
      small: {
        maxWidth: '290px',
      },
      large: {
        maxWidth: '380px',
      },
    },
  },

  img: {
    width: '100%',
    height: '210px',
    objectFit: 'cover',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
  },
});

export const CardContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '0.25fr 1fr',
  gridColumnGap: '4px',
  padding: '0.75rem',
});

export const EventDate = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',

  p: {
    fontWeight: '$medium',
    fontSize: '$sm',
    color: '$gray300',
    letterSpacing: '1px',

    maxWidth: '100%',
  },

  span: {
    fontWeight: 'bold',
    fontSize: '$lg',
    color: '$gray300',
    letterSpacing: '1px',
  },
});

export const EventDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '4px',
  overflow: 'hidden',

  h2: {
    fontWeight: '$semibold',
    fontSize: '$lg',
    color: '$gray300',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '$gray300',

    p: {
      fontSize: '$sm',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});
