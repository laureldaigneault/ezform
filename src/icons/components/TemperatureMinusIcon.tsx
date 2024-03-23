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
export type TemperatureMinusIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<TemperatureMinusIconProps>(({ theme, ...props }) => {
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
export default function TemperatureMinusIcon({ className = '', ...props }: TemperatureMinusIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M13 5C13 2.79086 14.7909 1 17 1C19.2091 1 21 2.79086 21 5V14.999C21.6274 15.8345 22 16.8744 22 17.9993C22 20.7608 19.7614 22.9993 17 22.9993C14.2386 22.9993 12 20.7608 12 17.9993C12 16.8744 12.3726 15.8345 13 14.999V5ZM17 3C15.8954 3 15 3.89543 15 5V15.7317L14.7497 16.0152C14.2824 16.5447 14 17.2378 14 17.9993C14 19.6562 15.3431 20.9993 17 20.9993C18.6569 20.9993 20 19.6562 20 17.9993C20 17.2378 19.7176 16.5447 19.2503 16.0152L19 15.7317V5C19 3.89543 18.1046 3 17 3Z" fill="currentcolor"/><path d="M2 4H10V6H2V4Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
