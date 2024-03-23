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
export type CalendarHeartIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CalendarHeartIconProps>(({ theme, ...props }) => {
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
export default function CalendarHeartIcon({ className = '', ...props }: CalendarHeartIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.997 11.433C10.9974 10.8394 9.68367 10.7979 8.62297 11.661C7.32953 12.7135 7.11986 14.5349 8.16768 15.819L8.2127 15.8742L11.9976 19.3594L15.7825 15.8742L15.8275 15.819C16.8659 14.5465 16.6948 12.7078 15.3617 11.6526C14.2966 10.8095 12.9947 10.8402 11.997 11.433ZM11.2536 13.3801C10.8531 12.9342 10.2851 12.887 9.88531 13.2123C9.44286 13.5724 9.39149 14.1081 9.68101 14.5075L11.9976 16.6406L14.3145 14.5072C14.6126 14.0976 14.5541 13.564 14.1204 13.2208C13.695 12.884 13.1348 12.9423 12.7416 13.3801L11.9976 14.2085L11.2536 13.3801Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M8 1V3H16V1H18V3H22V23H2V3H6V1H8ZM4 5V7H20V5H4ZM20 9H4V21H20V9Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
