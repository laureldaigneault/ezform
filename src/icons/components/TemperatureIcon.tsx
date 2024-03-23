import React from 'react';
import { styled } from '../../styles/theme';

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
export type TemperatureIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<TemperatureIconProps>(({ theme, ...props }) => {
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
  };
});
export default function TemperatureIcon({ className = '', ...props }: TemperatureIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V14.999C16.6274 15.8345 17 16.8744 17 17.9993C17 20.7608 14.7614 22.9993 12 22.9993C9.23858 22.9993 7 20.7608 7 17.9993C7 16.8744 7.37256 15.8345 8 14.999V5ZM12 3C10.8954 3 10 3.89543 10 5V15.7317L9.74974 16.0152C9.28243 16.5447 9 17.2378 9 17.9993C9 19.6562 10.3431 20.9993 12 20.9993C13.6569 20.9993 15 19.6562 15 17.9993C15 17.2378 14.7176 16.5447 14.2503 16.0152L14 15.7317V5C14 3.89543 13.1046 3 12 3Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
