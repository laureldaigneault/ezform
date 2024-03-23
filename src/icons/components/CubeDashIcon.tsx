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
export type CubeDashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CubeDashIconProps>(({ theme, ...props }) => {
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
export default function CubeDashIcon({ className = '', ...props }: CubeDashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M12 0.856049L15.3598 2.7226L14.3885 4.47092L12 3.14397L9.61149 4.47092L8.6402 2.7226L12 0.856049Z" fill="currentcolor"/><path d="M6.3598 6.27741L5.15293 6.9479L6.33941 7.53381L5.45385 9.32707L4 8.60912V10H2V6.4116L5.38851 4.5291L6.3598 6.27741Z" fill="currentcolor"/><path d="M18.6115 4.5291L22 6.4116V10H20V8.60912L18.5462 9.32707L17.6606 7.53381L18.8471 6.9479L17.6402 6.27741L18.6115 4.5291Z" fill="currentcolor"/><path d="M9.54615 9.11739L12 10.3292L14.4538 9.11739L15.3394 10.9106L13 12.0659V14H11V12.0659L8.66059 10.9106L9.54615 9.11739Z" fill="currentcolor"/><path d="M4 14V16.4116L6.3598 17.7226L5.38851 19.4709L2 17.5884V14H4Z" fill="currentcolor"/><path d="M22 14V17.5884L18.6115 19.4709L17.6402 17.7226L20 16.4116V14H22Z" fill="currentcolor"/><path d="M13 18V20.3005L14.3885 19.5291L15.3598 21.2774L12 23.144L8.6402 21.2774L9.61149 19.5291L11 20.3005V18H13Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
