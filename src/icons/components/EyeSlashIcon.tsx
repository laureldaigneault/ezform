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
export type EyeSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<EyeSlashIconProps>(({ theme, ...props }) => {
  return {
    userSelect: 'none',
    cursor: props.onClick ? 'pointer' : 'default',
    position: 'relative',
    height: '1em',
    minHeight: '1em',
    transition: 'zoom .3s ease-in-out',
    width: '1em',
    minWidth: '1em',
    fontSize: props.size && typeof props.size === 'string' ? props.size : props.size + 'px',
    color:
      props.color && typeof props.color === 'string'
        ? (theme.palette as any)[props.color]
          ? (theme.palette as any)[props.color]?.main?.color
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
export default function EyeSlashIcon({ className = '', ...props }: EyeSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1517)"><path fillRule="evenodd" clipRule="evenodd" d="M2.00015 0.585785L6.66966 5.25529C8.26469 4.45277 10.0792 4 12.0001 4C17.1113 4 21.4756 7.20778 22.95 11.6874L23.0529 12L22.95 12.3127C22.2434 14.4594 20.8722 16.3138 19.0767 17.6623L23.4144 22L22.0002 23.4142L0.585938 2L2.00015 0.585785ZM17.6452 16.2308C19.1512 15.1691 20.3084 13.6977 20.9406 12C19.6465 8.52552 16.1504 6 12.0001 6C10.6373 6 9.34427 6.27257 8.1764 6.76203L9.94163 8.52727C10.5501 8.19085 11.2536 8 11.9994 8C14.2433 8 16.1433 9.74722 16.1433 12C16.1433 12.7768 15.9137 13.4985 15.522 14.1076L17.6452 16.2308ZM14.0373 12.6229C14.1065 12.4259 14.1433 12.2164 14.1433 12C14.1433 10.9391 13.2281 10 11.9994 10C11.8176 10 11.6419 10.021 11.4746 10.0602L14.0373 12.6229Z" fill="currentcolor"/><path d="M4.92311 8.93274L4.31662 9.72783C3.78912 10.4194 3.36373 11.1834 3.05965 11.9999C4.35382 15.4745 7.84988 18 12.0002 18C12.4078 18 12.809 17.9756 13.2023 17.9284L14.1951 17.8092L14.4335 19.795L13.4406 19.9142C12.9684 19.9708 12.4876 20 12.0002 20C6.88898 20 2.52473 16.7922 1.05028 12.3126L0.947374 12L1.05028 11.6873C1.4297 10.5346 2.00101 9.46587 2.72643 8.51486L3.33292 7.71977L4.92311 8.93274Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1517"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
