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
export type BatteryBoltIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BatteryBoltIconProps>(({ theme, ...props }) => {
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
export default function BatteryBoltIcon({ className = '', ...props }: BatteryBoltIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M12.3868 8.72265L10.8685 11H13L13.8321 12.5547L11.2774 16.3868L9.61325 15.2774L11.1315 13H9L8.16795 11.4453L10.7226 7.61325L12.3868 8.72265Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 4H21V8H23V16H21V20H1V4ZM21 14V10H19V6H3V18H19V14H21Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
