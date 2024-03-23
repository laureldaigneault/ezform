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
export type KeyIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<KeyIconProps>(({ theme, ...props }) => {
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
export default function KeyIcon({ className = '', ...props }: KeyIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M15 7H17.01V9H15V7Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M9 8C9 4.13401 12.134 1 16 1C19.866 1 23 4.13401 23 8C23 11.866 19.866 15 16 15C15.508 15 15.0269 14.9491 14.5622 14.852L12.4142 17H11V19H9V21H7V23H1V17.5858L9.14801 9.43778C9.05092 8.97307 9 8.49204 9 8ZM9 17V15H11.5858L13.9737 12.6121L14.5471 12.7859C15.0057 12.9249 15.4932 13 16 13C18.7614 13 21 10.7614 21 8C21 5.23858 18.7614 3 16 3C13.2386 3 11 5.23858 11 8C11 8.50683 11.0751 8.99431 11.2141 9.45287L11.3879 10.0263L3 18.4142V21H5V19H7V17H9Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
