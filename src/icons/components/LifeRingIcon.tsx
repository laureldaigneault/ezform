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
export type LifeRingIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<LifeRingIconProps>(({ theme, ...props }) => {
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
export default function LifeRingIcon({ className = '', ...props }: LifeRingIconProps): React.ReactElement {
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
          d='M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM4.9681 6.38231C3.73647 7.92198 3 9.87499 3 12C3 14.125 3.73647 16.078 4.9681 17.6177L7.10925 15.4765C6.41079 14.4957 6 13.2958 6 12C6 10.7042 6.41079 9.50428 7.10925 8.52347L4.9681 6.38231ZM6.38231 4.9681L8.52347 7.10925C9.50428 6.41079 10.7042 6 12 6C13.2958 6 14.4957 6.41079 15.4765 7.10925L17.6177 4.9681C16.078 3.73647 14.125 3 12 3C9.87499 3 7.92198 3.73647 6.38231 4.9681ZM19.0319 6.38231L16.8907 8.52347C17.5892 9.50428 18 10.7042 18 12C18 13.2958 17.5892 14.4957 16.8907 15.4765L19.0319 17.6177C20.2635 16.078 21 14.125 21 12C21 9.87499 20.2635 7.92199 19.0319 6.38231ZM17.6177 19.0319L15.4765 16.8907C14.4957 17.5892 13.2958 18 12 18C10.7042 18 9.50428 17.5892 8.52347 16.8907L6.38231 19.0319C7.92199 20.2635 9.87499 21 12 21C14.125 21 16.078 20.2635 17.6177 19.0319ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
