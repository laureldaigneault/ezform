import { Modal as BaseModal, ModalProps as BaseModalProps } from '@mui/base';
import { BaseComponentWithChildrenProps } from '../../utils/types';
import styled from 'styled-components';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export type ModalProps = BaseModalProps &
  BaseComponentWithChildrenProps & { title?: string; description?: string; actions?: ReactNode };

const Backdrop: FC<{ open?: boolean; className?: string }> = (props) => {
  const { open, className, ...other } = props;
  return <div className={clsx({ 'base-Backdrop-open': open }, className)} {...other} />;
};

const Root = styled(BaseModal)<ModalProps>(() => {
  return {
    position: 'fixed',
    zIndex: 1300,
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

const StyledBackdrop = styled(Backdrop)<any>(() => {
  return {
    zIndex: -1,
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    ' -webkit-tap-highlight-color': 'transparent',
  };
});

const ModalContent = styled('div')<BaseComponentWithChildrenProps>(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.getSpacing(1),
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.getShadow('projection'),
    padding: theme.getSpacing(3),
    color: 'black',
    outline: 'none',
    minWidth: '35dvw',
    textAlign: 'center',
    ...theme.getBorderStyle('container'),

    ['& h1']: {
      ...theme.getTypographyStyle('h1'),
      textAlign: 'center',
    },

    ['& h2']: {
      margin: 0,
      marginBottom: '4px',
      textAlign: 'center',
    },

    ['& .modal-actions-container']: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'stretch',
      alignItems: 'stretch',
      gap: theme.getSpacing(1),
    },
  };
});

const Modal = (props: ModalProps) => {
  return (
    <Root slots={{ backdrop: StyledBackdrop }} {...props}>
      <ModalContent>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        {props.children}
        <div className='modal-actions-container'>{props.actions}</div>
      </ModalContent>
    </Root>
  );
};

export default Modal;
