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
export type SquareParkingSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<SquareParkingSlashIconProps>(({ theme, ...props }) => {
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
export default function SquareParkingSlashIcon({
  className = '',
  ...props
}: SquareParkingSlashIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1471)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.00015 0.585815L3.41436 2.00003H22.0002V20.5858L23.4144 22L22.0002 23.4142L0.585938 2.00003L2.00015 0.585815ZM20.0002 18.5858V4.00003H5.41436L8.50015 7.08582V7.00003H16.5002V14H15.4144L20.0002 18.5858ZM13.4144 12H14.5002V9.00003H10.5002V9.08582L13.4144 12Z'
            fill='currentcolor'
          />
          <path d='M4.00015 7.50003V20H16.5002V22H2.00015V7.50003H4.00015Z' fill='currentcolor' />
          <path d='M10.5002 14.1V17H8.50015V14.1H10.5002Z' fill='currentcolor' />
        </g>
        <defs>
          <clipPath id='clip0_1718_1471'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
