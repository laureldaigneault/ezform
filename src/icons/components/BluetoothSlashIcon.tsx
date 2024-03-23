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
export type BluetoothSlashIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BluetoothSlashIconProps>(({ theme, ...props }) => {
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
export default function BluetoothSlashIcon({ className = '', ...props }: BluetoothSlashIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1614)"><path fillRule="evenodd" clipRule="evenodd" d="M2.00015 0.585785L11.0002 9.58578V2L12.7073 1.29289L18.4144 7L13.4144 12L23.4144 22L22.0002 23.4142L0.585938 2L2.00015 0.585785ZM13.0002 9.58578L15.5859 7L13.0002 4.41421V9.58578Z" fill="currentcolor"/><path d="M10.6144 14.8L7.00015 18.4142L5.58594 17L9.20016 13.3858L10.6144 14.8Z" fill="currentcolor"/><path d="M13.0002 16.6001V19.5858L14.2002 18.3858L15.6144 19.8L12.7073 22.7072L11.0002 22.0001V16.6001H13.0002Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1614"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
