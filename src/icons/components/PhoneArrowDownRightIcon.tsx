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
export type PhoneArrowDownRightIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PhoneArrowDownRightIconProps>(({ theme, ...props }) => {
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
export default function PhoneArrowDownRightIcon({ className = '', ...props }: PhoneArrowDownRightIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 4C1 2.34315 2.34315 1 4 1H7.8198L9.08554 7.32867L6.41389 10.0003C7.44973 13.6627 10.3373 16.5503 13.9997 17.5861L16.6713 14.9145L23 16.1802V20C23 21.6569 21.6569 23 20 23H17C8.16344 23 1 15.8366 1 7V4ZM4 3C3.44772 3 3 3.44772 3 4V7C3 14.732 9.26801 21 17 21H20C20.5523 21 21 20.5523 21 20V17.8198L17.3287 17.0855L14.6198 19.7944L14.0803 19.6706C9.24414 18.5604 5.4396 14.7559 4.32939 9.9197L4.20555 9.38024L6.91446 6.67133L6.1802 3H4Z" fill="currentcolor"/><path d="M22.4142 3L17.4142 8H20V10H14V4H16V6.58579L21 1.58579L22.4142 3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
