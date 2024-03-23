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
export type DnaIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<DnaIconProps>(({ theme, ...props }) => {
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
export default function DnaIcon({ className = '', ...props }: DnaIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M4 1H16.001V3H6V3.96559C6 4.66861 6.10483 5.35248 6.30154 6H13V8H7.27954C8.17802 9.27373 9.49879 10.2454 11.077 10.6963L12 10.96L12.923 10.6963C15.9282 9.83765 18 7.09095 18 3.96559V1H20V3.96559C20 7.40741 18.0457 10.4921 15.057 12C18.0457 13.5079 20 16.5926 20 20.0344V23H8V21H18V20.0344C18 19.3314 17.8952 18.6475 17.6985 18H11V16H16.7205C15.822 14.7263 14.5012 13.7546 12.923 13.3037L12 13.04L11.077 13.3037C8.07184 14.1623 6 16.909 6 20.0344V23.5H4V20.0344C4 16.5926 5.95428 13.5079 8.94296 12C5.95428 10.4921 4 7.40741 4 3.96559V1Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
