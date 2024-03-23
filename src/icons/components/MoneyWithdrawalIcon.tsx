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
export type MoneyWithdrawalIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MoneyWithdrawalIconProps>(({ theme, ...props }) => {
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
export default function MoneyWithdrawalIcon({
  className = '',
  ...props
}: MoneyWithdrawalIconProps): React.ReactElement {
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
          d='M9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13ZM12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 1H23V10H19V23H5V10H1V1ZM7 8V17.0356C7.16338 17.0121 7.33034 17 7.5 17C9.433 17 11 18.567 11 20.5C11 20.6697 10.9879 20.8366 10.9644 21H13.0356C13.0121 20.8366 13 20.6697 13 20.5C13 18.567 14.567 17 16.5 17C16.6697 17 16.8366 17.0121 17 17.0356V8H7ZM19 8V6H5V8H3V3H21V8H19ZM17 19.0851C16.8439 19.03 16.6758 19 16.5 19C15.6716 19 15 19.6716 15 20.5C15 20.6758 15.03 20.8439 15.0851 21H17V19.0851ZM8.91486 21C8.97004 20.8439 9 20.6758 9 20.5C9 19.6716 8.32843 19 7.5 19C7.32417 19 7.15608 19.03 7 19.0851V21H8.91486Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
