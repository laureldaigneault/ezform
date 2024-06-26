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
export type TicketIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<TicketIconProps>(({ theme, ...props }) => {
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
export default function TicketIcon({ className = '', ...props }: TicketIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path d='M15.5 10V14H13.5V10H15.5Z' fill='currentcolor' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 3H23V9.5H22C20.6193 9.5 19.5 10.6193 19.5 12C19.5 13.3807 20.6193 14.5 22 14.5H23V21H1V14.5H2C3.38071 14.5 4.5 13.3807 4.5 12C4.5 10.6193 3.38071 9.5 2 9.5H1V3ZM15.5 19V16H13.5V19H3V16.3885C5.00399 15.9338 6.5 14.1416 6.5 12C6.5 9.85841 5.00399 8.06624 3 7.61151V5H13.5V8H15.5V5H21V7.61151C18.996 8.06624 17.5 9.85841 17.5 12C17.5 14.1416 18.996 15.9338 21 16.3885V19H15.5Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
