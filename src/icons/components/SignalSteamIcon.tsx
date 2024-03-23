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
export type SignalSteamIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<SignalSteamIconProps>(({ theme, ...props }) => {
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
export default function SignalSteamIcon({ className = '', ...props }: SignalSteamIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M6.34315 4.92972L5.63604 5.63682C2.12132 9.15154 2.12132 14.85 5.63604 18.3647L6.34315 19.0719L4.92893 20.4861L4.22183 19.779C-0.0739415 15.4832 -0.0739415 8.51838 4.22183 4.22261L4.92893 3.5155L6.34315 4.92972Z" fill="currentcolor"/><path d="M19.0715 3.5155L19.7786 4.22261C24.0744 8.51838 24.0744 15.4832 19.7786 19.779L19.0715 20.4861L17.6573 19.0719L18.3644 18.3647C21.8791 14.85 21.8791 9.15154 18.3644 5.63682L17.6573 4.92972L19.0715 3.5155Z" fill="currentcolor"/><path d="M9.17179 7.75784L8.46469 8.46495C6.51207 10.4176 6.51207 13.5834 8.46469 15.536L9.17179 16.2431L7.75758 17.6573L7.05047 16.9502C4.3168 14.2166 4.3168 9.78441 7.05047 7.05073L7.75758 6.34363L9.17179 7.75784Z" fill="currentcolor"/><path d="M16.2424 6.34363L16.9495 7.05073C19.6832 9.78441 19.6832 14.2166 16.9495 16.9502L16.2424 17.6573L14.8282 16.2431L15.5353 15.536C17.4879 13.5834 17.4879 10.4176 15.5353 8.46495L14.8282 7.75784L16.2424 6.34363Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M9.00022 12C9.00022 10.3432 10.3434 9.00003 12.0002 9.00003C13.6571 9.00003 15.0002 10.3432 15.0002 12C15.0002 13.6569 13.6571 15 12.0002 15C10.3434 15 9.00022 13.6569 9.00022 12ZM12.0002 11C11.4479 11 11.0002 11.4477 11.0002 12C11.0002 12.5523 11.4479 13 12.0002 13C12.5525 13 13.0002 12.5523 13.0002 12C13.0002 11.4477 12.5525 11 12.0002 11Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
