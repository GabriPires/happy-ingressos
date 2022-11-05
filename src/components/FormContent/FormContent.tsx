import { styled } from '../../styles';

export const FormContent = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '0.25rem',

  '&:first-of-type': {
    marginBottom: '8px',
  },
});
