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
export type SunIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<SunIconProps>(({ theme, ...props }) => {
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
export default function SunIcon({ className = '', ...props }: SunIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path d='M13 1V4H11V1H13Z' fill='currentcolor' />
        <path
          d='M4.92871 3.51474L7.05003 5.63606L5.63582 7.05028L3.5145 4.92896L4.92871 3.51474Z'
          fill='currentcolor'
        />
        <path
          d='M20.4845 4.92896L18.3632 7.05028L16.949 5.63606L19.0703 3.51474L20.4845 4.92896Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z'
          fill='currentcolor'
        />
        <path d='M1 11H4V13H1V11Z' fill='currentcolor' />
        <path d='M20 11H23V13H20V11Z' fill='currentcolor' />
        <path d='M7.04996 18.364L4.92864 20.4853L3.51442 19.0711L5.63574 16.9498L7.04996 18.364Z' fill='currentcolor' />
        <path
          d='M18.3633 16.9498L20.4846 19.0711L19.0704 20.4853L16.9491 18.364L18.3633 16.9498Z'
          fill='currentcolor'
        />
        <path d='M13 20V23H11V20H13Z' fill='currentcolor' />
      </g>
    </StyledIcon>
  );
}
