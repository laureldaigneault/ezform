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
export type Shapes1IconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<Shapes1IconProps>(({ theme, ...props }) => {
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
export default function Shapes1Icon({ className = '', ...props }: Shapes1IconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <g clipPath='url(#clip0_1718_1603)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 -0.0397301L18.2098 11H5.79015L12 -0.0397301ZM9.20985 9H14.7902L12 4.03973L9.20985 9Z'
            fill='currentcolor'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1 18C1 15.2386 3.23858 13 6 13C8.76142 13 11 15.2386 11 18C11 20.7614 8.76142 23 6 23C3.23858 23 1 20.7614 1 18ZM6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15Z'
            fill='currentcolor'
          />
          <path fillRule='evenodd' clipRule='evenodd' d='M13 13H23V23H13V13ZM15 15V21H21V15H15Z' fill='currentcolor' />
        </g>
        <defs>
          <clipPath id='clip0_1718_1603'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </g>
    </StyledIcon>
  );
}
