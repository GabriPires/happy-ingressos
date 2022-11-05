import { styled } from '../../styles';

export const SearchFormContainer = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  background: '$primary',
  padding: '1.75rem 0.8rem',

  '@lg': {
    width: '90%',
    margin: '0 auto',
    padding: '2rem',
    borderBottomRightRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
  },

  h2: {
    fontSize: '$lg',
    marginBottom: '0.5rem',
    color: '$white',
  },

  div: {
    display: 'flex',
    gap: '0.55rem',

    input: {
      flex: 1,
      border: 'none',
      borderRadius: '4px',
      padding: '0.75rem 1rem',
    },

    button: {
      background: 'transparent',
      color: '$white',
      border: '1px solid $white',
      borderRadius: '4px',
      width: '40px',
      height: '40px',
    },
  },
});
