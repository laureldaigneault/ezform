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
export type EyeIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<EyeIconProps>(({ theme, ...props }) => {
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
export default function EyeIcon({ className = '', ...props }: EyeIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.85551 12C7.85551 9.74722 9.75549 8 11.9994 8C14.2434 8 16.1434 9.74722 16.1434 12C16.1434 14.2528 14.2434 16 11.9994 16C9.75549 16 7.85551 14.2528 7.85551 12ZM11.9994 10C10.7707 10 9.85551 10.9391 9.85551 12C9.85551 13.0609 10.7707 14 11.9994 14C13.2282 14 14.1434 13.0609 14.1434 12C14.1434 10.9391 13.2282 10 11.9994 10Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1.05018 11.6873C2.52465 7.20774 6.88888 4 12 4C17.1112 4 21.4755 7.20778 22.9499 11.6874L23.0528 12L22.9499 12.3127C21.4754 16.7923 17.1112 20 12.0001 20C6.88887 20 2.52462 16.7922 1.05017 12.3126L0.947266 12L1.05018 11.6873ZM3.05955 12C4.35372 15.4745 7.84978 18 12.0001 18C16.1503 18 19.6463 15.4745 20.9405 12C19.6464 8.52551 16.1503 6 12 6C7.84978 6 4.35374 8.52548 3.05955 12Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
