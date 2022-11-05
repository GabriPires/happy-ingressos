import { styled } from '../../styles';

export const FormContent = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '0.25rem',

  '&:not(:last-of-type)': {
    marginBottom: '8px',
  },
});
