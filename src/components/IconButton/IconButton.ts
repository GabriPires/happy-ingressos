import { styled } from '../../styles';

export const IconButton = styled('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$gray300',

  display: 'flex',
  alignItems: 'center',

  transition: 'color 0.2s',

  '&:hover': {
    color: '$white',
  },
});
