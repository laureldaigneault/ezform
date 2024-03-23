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
export type VaultIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<VaultIconProps>(({ theme, ...props }) => {
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
export default function VaultIcon({ className = '', ...props }: VaultIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M8.5 10.5H10.51V12.5H8.5V10.5Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M5 11.5C5 9.01472 7.01472 7 9.5 7C11.9853 7 14 9.01472 14 11.5C14 13.9853 11.9853 16 9.5 16C7.01472 16 5 13.9853 5 11.5ZM9.5 9C8.11929 9 7 10.1193 7 11.5C7 12.8807 8.11929 14 9.5 14C10.8807 14 12 12.8807 12 11.5C12 10.1193 10.8807 9 9.5 9Z" fill="currentcolor"/><path d="M15 10C15 8.89543 15.8954 8 17 8C18.1046 8 19 8.89543 19 10C19 10.7403 18.5978 11.3866 18 11.7324V15H16V11.7324C15.4022 11.3866 15 10.7403 15 10Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 3H23V20H18V22H16V20H8V22H6V20H1V3ZM21 18V5H3V18H21Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
