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
export type UserBlockIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<UserBlockIconProps>(({ theme, ...props }) => {
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
export default function UserBlockIcon({ className = '', ...props }: UserBlockIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6ZM12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3Z" fill="currentcolor"/><path d="M4.06189 21C4.55399 17.0537 7.92038 14 12 14C12.8571 14 13.6809 14.1344 14.4525 14.3827L15.4045 14.6889L16.0169 12.785L15.065 12.4787C14.0979 12.1676 13.0675 12 12 12C6.47715 12 2 16.4772 2 22V23H13.6736V21H4.06189Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M15 19C15 16.7909 16.7909 15 19 15C21.2091 15 23 16.7909 23 19C23 21.2091 21.2091 23 19 23C16.7909 23 15 21.2091 15 19ZM19 17C17.8954 17 17 17.8954 17 19C17 19.1792 17.0236 19.3528 17.0677 19.518L19.518 17.0677C19.3528 17.0236 19.1792 17 19 17ZM20.9323 18.482L18.482 20.9323C18.6472 20.9764 18.8208 21 19 21C20.1046 21 21 20.1046 21 19C21 18.8208 20.9764 18.6472 20.9323 18.482Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
