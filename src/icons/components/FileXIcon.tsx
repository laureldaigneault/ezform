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
export type FileXIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FileXIconProps>(({ theme, ...props }) => {
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
export default function FileXIcon({ className = '', ...props }: FileXIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M10 12.5858L12 14.5858L14 12.5858L15.4142 14L13.4142 16L15.4142 18L14 19.4142L12 17.4142L10 19.4142L8.58579 18L10.5858 16L8.58579 14L10 12.5858Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3 1H14.4142L21 7.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 4.41421L17.5858 7H15V4.41421Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
