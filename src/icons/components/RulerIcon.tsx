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
export type RulerIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<RulerIconProps>(({ theme, ...props }) => {
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
export default function RulerIcon({ className = '', ...props }: RulerIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1598)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.0002 0.585785L23.4144 6L6.00015 23.4142L0.585938 18L18.0002 0.585785ZM14.5002 6.91421L16.0002 8.41421L17.4144 7L15.9144 5.5L18.0002 3.41421L20.5859 6L6.00015 20.5858L3.41436 18L5.50015 15.9142L7.00015 17.4142L8.41436 16L6.91436 14.5L8.50015 12.9142L10.0002 14.4142L11.4144 13L9.91436 11.5L11.5002 9.91421L13.0002 11.4142L14.4144 10L12.9144 8.5L14.5002 6.91421Z'
            fill='currentcolor'
          />
        </g>
        <defs>
          <clipPath id='clip0_1718_1598'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
