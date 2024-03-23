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
export type WatchIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<WatchIconProps>(({ theme, ...props }) => {
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
export default function WatchIcon({ className = '', ...props }: WatchIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M13 8V11.5858L15.4142 14L14 15.4142L11 12.4142V8H13Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M8.27875 1H15.7203L16.7207 4H18.4142L20 5.58579V18.4142L18.4142 20H16.7208L15.7208 23H8.27924L7.27924 20H5.58579L4 18.4142V5.58579L5.58579 4H7.27915L8.27875 1ZM9.38725 4H14.6124L14.2789 3H9.72045L9.38725 4ZM9.38743 20L9.72076 21H14.2792L14.6126 20H9.38743ZM6.41421 6L6 6.41421V17.5858L6.41421 18H17.5858L18 17.5858V6.41421L17.5858 6H6.41421Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
