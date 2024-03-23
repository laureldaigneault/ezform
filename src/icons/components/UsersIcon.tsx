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
export type UsersIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<UsersIconProps>(({ theme, ...props }) => {
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
export default function UsersIcon({ className = '', ...props }: UsersIconProps): React.ReactElement {
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
          d='M4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6ZM8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14 8C14 6.34315 15.3431 5 17 5C18.6569 5 20 6.34315 20 8C20 9.65685 18.6569 11 17 11C15.3431 11 14 9.65685 14 8ZM17 7C16.4477 7 16 7.44772 16 8C16 8.55228 16.4477 9 17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 18C1 14.134 4.13401 11 8 11C10.0765 11 11.9412 11.9046 13.2221 13.3386C14.253 12.5023 15.5681 12 17 12C20.3137 12 23 14.6863 23 18V22H1V18ZM14.3344 15.0175C14.7614 15.923 15 16.9346 15 18V20H21V18C21 15.7909 19.2091 14 17 14C15.9762 14 15.0426 14.3838 14.3344 15.0175ZM13 20V18C13 17.0379 12.7292 16.1421 12.2603 15.3811C11.3784 13.9502 9.79975 13 8 13C5.23858 13 3 15.2386 3 18V20H13Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
