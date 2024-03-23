import React from 'react';
  import styled from 'styled-components';

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
export type CloudSunIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CloudSunIconProps>(({ theme, ...props }) => {
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
  }
})
export default function CloudSunIcon({ className = '', ...props }: CloudSunIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.47097 6.47074C7.42044 7.2655 5.838 8.99846 5.24923 11.143C2.8139 11.7096 1 13.8925 1 16.5C1 19.5376 3.46243 22 6.5 22H18.5C20.9853 22 23 19.9853 23 17.5C23 15.9753 22.2417 14.6277 21.0817 13.8138C22.2697 12.5599 22.9998 10.8654 22.9998 9C22.9998 5.13401 19.8658 2 15.9998 2C13.0245 2 10.4848 3.85559 9.47097 6.47074ZM12 6C11.9997 6 12.0003 6 12 6C15.866 6 19 9.13401 19 13C19 12.9999 19 13.0001 19 13C20.216 12.0865 20.9998 10.6346 20.9998 9C20.9998 6.23858 18.7612 4 15.9998 4C14.3647 4 12.9126 4.78522 12 6ZM12 8C9.51785 8 7.45643 9.80967 7.0665 12.1816L6.94118 12.9439L6.17196 13.0151C4.39329 13.1798 3 14.6778 3 16.5C3 18.433 4.567 20 6.5 20H18.5C19.8807 20 21 18.8807 21 17.5C21 16.1193 19.8807 15 18.5 15C18.3549 15 18.2134 15.0123 18.0763 15.0356L16.677 15.2738L16.9237 13.876C16.9738 13.5922 17 13.2996 17 13C17 10.2386 14.7614 8 12 8Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
