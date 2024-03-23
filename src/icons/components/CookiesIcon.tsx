import React from 'react';
  import styled from 'styled-components';

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
export type CookiesIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CookiesIconProps>(({ theme, ...props }) => {
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
  }
})
export default function CookiesIcon({ className = '', ...props }: CookiesIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M8 5H10.0117V7H8V5Z" fill="currentcolor"/><path d="M5 8H7.01167V10H5V8Z" fill="currentcolor"/><path d="M11 8H13.0117V10H11V8Z" fill="currentcolor"/><path d="M8 11H10.0117V13H8V11Z" fill="currentcolor"/><path d="M17 14H19.0117V16H17V14Z" fill="currentcolor"/><path d="M14 17H16.0117V19H14V17Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 9C1 4.58172 4.58172 1 9 1C12.8004 1 15.9818 3.64994 16.7973 7.20285C20.3506 8.01879 23.0002 11.1992 23.0002 15C23.0002 19.4183 19.4185 23 15.0002 23C11.1996 23 8.01922 20.3505 7.20317 16.7974C3.6501 15.982 1 12.8005 1 9ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3ZM9.3389 16.993C10.1604 19.3268 12.3855 21 15.0002 21C18.3139 21 21.0002 18.3137 21.0002 15C21.0002 12.3852 19.3269 10.16 16.993 9.33857C16.8202 13.4874 13.4877 16.8201 9.3389 16.993Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
