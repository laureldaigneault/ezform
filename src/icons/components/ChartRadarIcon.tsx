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
export type ChartRadarIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ChartRadarIconProps>(({ theme, ...props }) => {
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
export default function ChartRadarIcon({ className = '', ...props }: ChartRadarIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.0048 15C6.90023 15 6.0048 14.1046 6.0048 13C6.0048 11.8954 6.90023 11 8.0048 11C8.18113 11 8.35213 11.0228 8.51501 11.0657L11.0652 8.51543C11.0195 8.34748 10.995 8.17074 10.995 7.98828C10.995 6.88371 11.8905 5.98828 12.995 5.98828C14.0996 5.98828 14.995 6.88371 14.995 7.98828C14.995 8.53001 14.7797 9.02143 14.4299 9.38158L15.4782 13.0509C16.3535 13.264 17.0033 14.0532 17.0033 14.9941C17.0033 16.0987 16.1079 16.9941 15.0033 16.9941C14.0692 16.9941 13.2847 16.3538 13.0648 15.4881L9.39359 14.4392C9.03385 14.7864 8.54427 15 8.0048 15ZM9.94609 12.517L13.539 13.5435L12.506 9.92805C12.4993 9.92639 12.4927 9.92469 12.4861 9.92296L9.93495 12.4741C9.93882 12.4884 9.94253 12.5027 9.94609 12.517Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M0.855957 12L6.41151 2H17.5883L23.1439 12L17.5883 22H6.41151L0.855957 12ZM3.14387 12L7.58832 20H16.4115L20.856 12L16.4115 4H7.58832L3.14387 12Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
