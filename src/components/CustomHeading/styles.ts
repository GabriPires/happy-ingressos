import { styled } from '../../styles';

export const HeadingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
  marginLeft: '10px',
});

export const Indicator = styled('div', {
  width: '4px',
  height: '16px',
  backgroundColor: '$primary',
});
