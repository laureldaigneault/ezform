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
export type TowerBroadcastIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<TowerBroadcastIconProps>(({ theme, ...props }) => {
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
export default function TowerBroadcastIcon({ className = '', ...props }: TowerBroadcastIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M6.34315 2.92972L5.63604 3.63682C2.12132 7.15154 2.12132 12.85 5.63604 16.3647L6.34315 17.0719L4.92893 18.4861L4.22183 17.779C-0.0739415 13.4832 -0.0739415 6.51838 4.22183 2.22261L4.92893 1.5155L6.34315 2.92972Z" fill="currentcolor"/><path d="M19.0715 1.5155L19.7786 2.22261C24.0744 6.51838 24.0744 13.4832 19.7786 17.779L19.0715 18.4861L17.6573 17.0719L18.3644 16.3647C21.8791 12.85 21.8791 7.15154 18.3644 3.63682L17.6573 2.92972L19.0715 1.5155Z" fill="currentcolor"/><path d="M9.17179 5.75784L8.46469 6.46495C6.51207 8.41757 6.51207 11.5834 8.46469 13.536L9.17179 14.2431L7.75758 15.6573L7.05047 14.9502C4.3168 12.2166 4.3168 7.78441 7.05047 5.05073L7.75758 4.34363L9.17179 5.75784Z" fill="currentcolor"/><path d="M16.2424 4.34363L16.9495 5.05073C19.6832 7.78441 19.6832 12.2166 16.9495 14.9502L16.2424 15.6573L14.8282 14.2431L15.5353 13.536C17.4879 11.5834 17.4879 8.41757 15.5353 6.46495L14.8282 5.75784L16.2424 4.34363Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M9.00022 10C9.00022 8.34317 10.3434 7.00003 12.0002 7.00003C13.6571 7.00003 15.0002 8.34317 15.0002 10C15.0002 11.3062 14.1654 12.4175 13.0002 12.8293V22H11.0002V12.8293C9.83503 12.4175 9.00022 11.3062 9.00022 10ZM12.0002 9.00003C11.4479 9.00003 11.0002 9.44774 11.0002 10C11.0002 10.5523 11.4479 11 12.0002 11C12.5525 11 13.0002 10.5523 13.0002 10C13.0002 9.44774 12.5525 9.00003 12.0002 9.00003Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
