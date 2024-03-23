import React from 'react';
import { styled } from '../../styles/theme';

export interface CustomProps {
  /** Makes the icon spin. Provide a boolean to use the default spin speed of 1.5s. Or provide a string to set a custom spin speed */
  spin?: boolean | string;
  /** Rotates the icon. For example: 90deg */
  rotate?: number | string;
  /** Color to apply to the icon */
  color?: string;
  /** The size of the icon. Defaults to inherited font-size (i.e. 1em) */
  size?: number | string;
}

// This type definition is to introduce our custom props so that they will be documented in storybook */
export type Inbox1IconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<Inbox1IconProps>(({ theme, ...props }) => {
  return {
    userSelect: 'none',
    cursor: props.onClick ? 'pointer' : 'default',
    position: 'relative',
    height: '1em',
    minHeight: '1em',
    transition: 'zoom .3s ease-in-out',
    width: '1em',
    minWidth: '1em',
    fontSize: props.size ? (typeof props.size === 'string' ? props.size : props.size + 'px') : 'inherit',
    color:
      props.color && typeof props.color === 'string'
        ? (theme.palette?.color as any)[props.color]
          ? (theme.palette.color as any)[props.color]?.hex
          : props.color
        : 'inherit',
    animation: props.spin ? `$fidgetSpin ${typeof props.spin === 'boolean' ? '1s' : props.spin} linear infinite` : '',
    transform: props.rotate ? `rotate(${props.rotate})` : '',
    '@keyframes fidgetSpin': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  };
});
export default function Inbox1Icon({ className = '', ...props }: Inbox1IconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.56864 4.88558C5.02423 3.74661 6.12735 2.99976 7.35407 2.99976H16.6459C17.8726 2.99976 18.9758 3.74661 19.4314 4.88558L22.9285 13.6284C22.9757 13.7465 23 13.8725 23 13.9998V17.9998C23 19.6566 21.6569 20.9998 20 20.9998H4C2.34315 20.9998 1 19.6566 1 17.9998V13.9998C1 13.8725 1.02428 13.7465 1.07152 13.6284L4.56864 4.88558ZM7.35407 4.99976C6.94516 4.99976 6.57745 5.24871 6.42559 5.62837L3.47703 12.9998H7.17133C7.96698 12.9998 8.73004 13.3158 9.29265 13.8784L10.1211 14.7069C10.3086 14.8944 10.563 14.9998 10.8282 14.9998H13.1713C13.4365 14.9998 13.6909 14.8944 13.8784 14.7069L14.7069 13.8784C15.2695 13.3158 16.0325 12.9998 16.8282 12.9998H20.523L17.5744 5.62837C17.4225 5.24871 17.0548 4.99976 16.6459 4.99976H7.35407ZM21 14.9998H16.8282C16.563 14.9998 16.3086 15.1051 16.1211 15.2926L15.2926 16.1211C14.73 16.6837 13.967 16.9998 13.1713 16.9998H10.8282C10.0325 16.9998 9.26947 16.6837 8.70686 16.1211L7.87843 15.2926C7.6909 15.1051 7.43655 14.9998 7.17133 14.9998H3V17.9998C3 18.552 3.44772 18.9998 4 18.9998H20C20.5523 18.9998 21 18.552 21 17.9998V14.9998Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
