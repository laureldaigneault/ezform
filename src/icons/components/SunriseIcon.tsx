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
export type SunriseIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<SunriseIconProps>(({ theme, ...props }) => {
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
export default function SunriseIcon({ className = '', ...props }: SunriseIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M12 0.585815L16.4142 5.00003L15 6.41424L13 4.41424V10H11V4.41424L9 6.41424L7.58579 5.00003L12 0.585815Z'
          fill='currentcolor'
        />
        <path d='M5 9.58582L7.41421 12L6 13.4142L3.58579 11L5 9.58582Z' fill='currentcolor' />
        <path d='M20.4142 11L18 13.4142L16.5858 12L19 9.58582L20.4142 11Z' fill='currentcolor' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 19V17H6.08296C6.55904 14.1623 9.027 12 12 12C14.973 12 17.441 14.1623 17.917 17H22V19H2ZM15.874 17C15.4299 15.2748 13.8638 14 12 14C10.1362 14 8.57006 15.2748 8.12602 17H15.874Z'
          fill='currentcolor'
        />
        <path d='M5 21H19V23H5V21Z' fill='currentcolor' />
      </g>
    </StyledIcon>
  );
}
