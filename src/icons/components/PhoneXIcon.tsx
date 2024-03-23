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
export type PhoneXIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PhoneXIconProps>(({ theme, ...props }) => {
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
export default function PhoneXIcon({ className = '', ...props }: PhoneXIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 1H7.8198L9.08554 7.32867L6.41389 10.0003C7.44973 13.6627 10.3373 16.5503 13.9997 17.5861L16.6713 14.9145L23 16.1802V23H17C8.16344 23 1 15.8366 1 7V1ZM3 3V7C3 14.732 9.26801 21 17 21H21V17.8198L17.3287 17.0855L14.6198 19.7944L14.0803 19.6706C9.24414 18.5604 5.4396 14.7559 4.32939 9.9197L4.20555 9.38024L6.91446 6.67133L6.1802 3H3Z" fill="currentcolor"/><path d="M16 1.58579L18.5 4.08579L21 1.58579L22.4142 3L19.9142 5.5L22.4142 8L21 9.41421L18.5 6.91421L16 9.41421L14.5858 8L17.0858 5.5L14.5858 3L16 1.58579Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
