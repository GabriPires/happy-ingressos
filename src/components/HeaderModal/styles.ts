import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { styled } from '../../styles';

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
});

export const Content = styled(Dialog.Content, {
  width: '100vw',
  height: '100vh',
  padding: '2.5rem 3rem',
  background: '$gray800',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'grid',
  gridTemplateRows: 'auto auto',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },

  span: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    alignSelf: 'flex-end',
  },
});

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  border: '1px solid $gray300',
  borderRadius: '50%',
  padding: '0.5rem',
  width: 'fit-content',
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray300',
});

export const ModalLink = styled(Link, {
  color: '$white',
  textDecoration: 'none',

  fontSize: '$xl',
  fontWeight: '$semibold',

  '&:hover': {
    textDecoration: 'underline',
  },
});
