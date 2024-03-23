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
export type CircleParkingSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CircleParkingSlashIconProps>(({ theme, ...props }) => {
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
export default function CircleParkingSlashIcon({
  className = '',
  ...props
}: CircleParkingSlashIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1451)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.00015 0.585815L4.96113 3.54679C6.86807 1.95739 9.32305 1.00003 12.0002 1.00003C18.0753 1.00003 23.0002 5.9249 23.0002 12C23.0002 14.6771 22.0428 17.1321 20.4534 19.0391L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815ZM6.38242 4.96808L8.50015 7.08582V7.00003H16.5002V14H15.4144L19.0321 17.6178C20.2644 16.0776 21.0002 14.1255 21.0002 12C21.0002 7.02947 16.9707 3.00003 12.0002 3.00003C9.87473 3.00003 7.92255 3.73582 6.38242 4.96808ZM13.4144 12H14.5002V9.00003H10.5002V9.08582L13.4144 12Z'
            fill='currentcolor'
          />
          <path
            d='M4.00388 7.74542L3.63419 8.67458C3.22539 9.70201 3.00015 10.8235 3.00015 12C3.00015 16.9706 7.02959 21 12.0002 21C13.1767 21 14.2982 20.7748 15.3256 20.366L16.2548 19.9963L16.9941 21.8546L16.065 22.2243C14.8062 22.7252 13.4341 23 12.0002 23C5.92502 23 1.00015 18.0752 1.00015 12C1.00015 10.5661 1.27503 9.19399 1.77588 7.93519L2.14557 7.00604L4.00388 7.74542Z'
            fill='currentcolor'
          />
          <path d='M10.5002 14.1V17H8.50015V14.1H10.5002Z' fill='currentcolor' />
        </g>
        <defs>
          <clipPath id='clip0_1718_1451'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
