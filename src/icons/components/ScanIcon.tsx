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
export type ScanIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ScanIconProps>(({ theme, ...props }) => {
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
export default function ScanIcon({ className = '', ...props }: ScanIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M2 2H9V4H4V9H2V2Z" fill="currentcolor"/><path d="M15 2H22V9H20V4H15V2Z" fill="currentcolor"/><path d="M2 11H4.01V13H2V11Z" fill="currentcolor"/><path d="M6.5 11H8.51V13H6.5V11Z" fill="currentcolor"/><path d="M11 11H13.01V13H11V11Z" fill="currentcolor"/><path d="M15.5 13V11H17.51V13H15.5Z" fill="currentcolor"/><path d="M20 11H22.01V13H20V11Z" fill="currentcolor"/><path d="M4 15V20H9V22H2V15H4Z" fill="currentcolor"/><path d="M22 15V22H15V20H20V15H22Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
