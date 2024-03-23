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
export type ClockExclamationIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ClockExclamationIconProps>(({ theme, ...props }) => {
  return {
    userSelect: 'none',
    cursor: props.onClick ? 'pointer' : 'default',
    position: 'relative',
    height: '1em',
    minHeight: '1em',
    transition: 'zoom .3s ease-in-out',
    width: '1em',
    minWidth: '1em',
    fontSize: props.size && typeof props.size === 'string' ? props.size : props.size + 'px',
    color:
      props.color && typeof props.color === 'string'
        ? (theme.palette as any)[props.color]
          ? (theme.palette as any)[props.color]?.main?.color
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
export default function ClockExclamationIcon({ className = '', ...props }: ClockExclamationIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M3.29289 1.29289C3.68342 0.902369 4.31658 0.902369 4.70711 1.29289C5.09763 1.68342 5.09763 2.31658 4.70711 2.70711L2.70711 4.70711C2.31658 5.09763 1.68342 5.09763 1.29289 4.70711C0.902369 4.31658 0.902369 3.68342 1.29289 3.29289L3.29289 1.29289Z" fill="currentcolor"/><path d="M19.2929 1.29289C19.6834 0.902369 20.3166 0.902369 20.7071 1.29289L22.7071 3.29289C23.0976 3.68342 23.0976 4.31658 22.7071 4.70711C22.3166 5.09763 21.6834 5.09763 21.2929 4.70711L19.2929 2.70711C18.9024 2.31658 18.9024 1.68342 19.2929 1.29289Z" fill="currentcolor"/><path d="M12 6C12.5523 6 13 6.44772 13 7V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V7C11 6.44772 11.4477 6 12 6Z" fill="currentcolor"/><path d="M11 17C11 16.4477 11.4477 16 12 16H12.01C12.5623 16 13.01 16.4477 13.01 17C13.01 17.5523 12.5623 18 12.01 18H12C11.4477 18 11 17.5523 11 17Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
