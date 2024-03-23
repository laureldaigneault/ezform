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
export type DrawSquareIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<DrawSquareIconProps>(({ theme, ...props }) => {
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
export default function DrawSquareIcon({ className = '', ...props }: DrawSquareIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1C6.86384 1 8.42994 2.27477 8.87398 4H15.126C15.5701 2.27477 17.1362 1 19 1C21.2091 1 23 2.79086 23 5C23 6.86384 21.7252 8.42994 20 8.87398V15.126C21.7252 15.5701 23 17.1362 23 19C23 21.2091 21.2091 23 19 23C17.1362 23 15.5701 21.7252 15.126 20H8.87398C8.42994 21.7252 6.86384 23 5 23C2.79086 23 1 21.2091 1 19C1 17.1362 2.27477 15.5701 4 15.126V8.87398C2.27477 8.42994 1 6.86384 1 5ZM6 8.87398V15.126C7.40561 15.4878 8.5122 16.5944 8.87398 18H15.126C15.4878 16.5944 16.5944 15.4878 18 15.126V8.87398C16.5944 8.5122 15.4878 7.40561 15.126 6H8.87398C8.5122 7.40561 7.40561 8.5122 6 8.87398ZM5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3ZM19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3ZM5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17ZM19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
