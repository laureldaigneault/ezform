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
export type CalculatorIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CalculatorIconProps>(({ theme, ...props }) => {
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
export default function CalculatorIcon({ className = '', ...props }: CalculatorIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M7 11H9.01V13H7V11Z" fill="currentcolor"/><path d="M11 11H13.01V13H11V11Z" fill="currentcolor"/><path d="M15 11H17.01V13H15V11Z" fill="currentcolor"/><path d="M7 14H9.01V16H7V14Z" fill="currentcolor"/><path d="M11 14H13.01V16H11V14Z" fill="currentcolor"/><path d="M17 14V19H15V14H17Z" fill="currentcolor"/><path d="M7 17H9.01V19H7V17Z" fill="currentcolor"/><path d="M11 17H13.01V19H11V17Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M3 1H21V23H3V1ZM5 3V7H19V3H5ZM19 9H5V21H19V9Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
