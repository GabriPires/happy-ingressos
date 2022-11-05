import { styled } from '../../styles';

export const FormContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  '&:first-of-type': {
    marginBottom: '8px',
  },
});
