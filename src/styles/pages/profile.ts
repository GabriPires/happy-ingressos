import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: 'calc(100vh - 99px)',
  gap: '1rem',

  '@lg': {
    maxWidth: 1180,
    margin: '0 auto',
    marginBottom: 0,
  },
});

export const ProfileHeader = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  paddingInline: '16px',
  width: '100%',
  gridColumnGap: '2rem',
  alignItems: 'center',
  marginBottom: 16,

  background: '$gray800',
  paddingTop: '1rem',
  paddingBottom: '1rem',

  '@lg': {
    marginTop: 16,
    borderRadius: '6px',
  },

  img: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',

    '@lg': {
      width: '100px',
      height: '100px',
    },
  },
});

export const ProfileDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  paddingInline: '16px',
});

export const ProfileInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
});

export const DeleteAccountButton = styled('button', {
  background: 'transparent',
  border: 'none',
  color: '$red300',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});
