import { Snackbar as BaseSnackbar, SnackbarCloseReason, SnackbarProps } from '@mui/base';
import { BaseComponentProps } from '../../utils/types';
import { FC, useState } from 'react';
import styled from 'styled-components';

export type ToastProps = SnackbarProps &
  BaseComponentProps & {
    title?: string;
    description?: string;
  };

const Toast: FC<ToastProps> = ({ title, description, ...props }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (_: any, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <BaseSnackbar autoHideDuration={5000} open={open} onClose={handleClose} {...props}>
      {(title || description) && (
        <div className='snackbar-content'>
          <div className='snackbar-message'>
            <p className='snackbar-title'>{title}</p>
            <p className='snackbar-description'>{description}</p>
          </div>
          <div onClick={handleClose} className='snackbar-close-icon'>
            X
          </div>
        </div>
      )}
    </BaseSnackbar>
  );
};

export default styled(Toast)<ToastProps>(({ theme, ...props }) => {
  return {
    position: 'fixed',
    zIndex: 5500,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.getSpacing(2),
    bottom: '16px',
    right: '16px',
    maxWidth: '560px',
    minWidth: '300px',

    '& .snackbar-content': {
      display: 'flex',
      gap: theme.getSpacing(1),
      overflow: 'hidden',
      backgroundColor: theme.getColor(props.intent).hex,
      borderRadius: theme.getShape('borderRadius'),
      boxShadow: theme.getShadow('projection'),
      padding: theme.getSpacing(1),
      color: theme.getColor(props.intent).contrastTextHex,
      textAlign: 'start',
      position: 'relative',
      ...theme.getBorderStyle('container'),

      ['& .snackbar-message']: {
        flex: '1 1 0%',
        maxWidth: '100%',
      },

      ['& .snackbar-title']: {
        margin: 0,
        lineHeight: '1.5rem',
        marginRight: '0.5rem',
        fontWeight: 'bold',
      },

      ['& .snackbar-description']: {
        margin: 0,
        lineHeight: '1.5rem',
        fontWeight: 400,
        color: theme.getColor(props.intent).contrastTextHex,
      },

      ['& .snackbar-close-icon']: {
        cursor: 'pointer',
        flexShrink: 0,
        padding: '0px 2px',
        borderRadius: '4px',
        height: '22px',
        textAlign: 'center',
        lineHeight: '21px',
        fontWeight: 700,
        fontSize: '20px',
        transform: 'scaleX(1.2)',

        '&:hover': {
          background: theme.getColor('bad').hex,
          color: 'white',
        },
      },
    },
  };
});

const SnackbarContent = styled('div')(({ theme, ...props }) => {
  return {};
});
