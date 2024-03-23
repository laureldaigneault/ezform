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
export type LayersIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<LayersIconProps>(({ theme, ...props }) => {
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
export default function LayersIcon({ className = '', ...props }: LayersIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1590)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 0.856049L23.0592 7.00001L18.5592 9.50001L23.0592 12L18.5592 14.5L23.0592 17L12 23.144L0.940918 17L5.44092 14.5L0.940918 12L5.44092 9.50001L0.940918 7.00001L12 0.856049ZM7.50004 10.644L5.05917 12L12 15.856L18.9409 12L16.5 10.644L12 13.144L7.50004 10.644ZM7.50004 15.644L5.05917 17L12 20.856L18.9409 17L16.5 15.644L12 18.144L7.50004 15.644ZM5.05917 7.00001L12 10.856L18.9409 7.00001L12 3.14397L5.05917 7.00001Z'
            fill='currentcolor'
          />
        </g>
        <defs>
          <clipPath id='clip0_1718_1590'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
