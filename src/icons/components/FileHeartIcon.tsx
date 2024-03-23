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
export type FileHeartIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FileHeartIconProps>(({ theme, ...props }) => {
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
export default function FileHeartIcon({ className = '', ...props }: FileHeartIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.997 11.933C10.9974 11.3394 9.68367 11.2979 8.62297 12.161C7.32953 13.2135 7.11986 15.0349 8.16768 16.319C8.36973 16.5666 8.667 16.7959 8.91345 16.9747C9.15689 17.1512 9.44121 17.3413 9.71614 17.525C9.74315 17.5431 9.77008 17.5611 9.79687 17.579C10.4434 18.0115 10.9876 18.3878 11.2715 18.6876L11.9983 19.4551L12.7243 18.6869C13.0072 18.3876 13.5509 18.0116 14.1978 17.579C14.2251 17.5608 14.2525 17.5424 14.28 17.524C14.5545 17.3406 14.8384 17.1509 15.0814 16.9747C15.3279 16.7961 15.6254 16.5667 15.8275 16.319C16.8659 15.0465 16.6948 13.2078 15.3617 12.1526C14.2966 11.3095 12.9947 11.3402 11.997 11.933ZM11.2536 13.8801C10.8531 13.4342 10.2851 13.387 9.88531 13.7123C9.42541 14.0866 9.38805 14.6506 9.71685 15.0541C9.71687 15.0541 9.72339 15.0617 9.73941 15.0773C9.75725 15.0947 9.78231 15.1176 9.81611 15.1462C9.88465 15.2042 9.97466 15.2737 10.0877 15.3557C10.2983 15.5084 10.5502 15.6769 10.8341 15.8667C10.8588 15.8832 10.8837 15.8998 10.9088 15.9166L10.9166 15.9218C11.248 16.1435 11.637 16.4037 11.9973 16.6786C12.3579 16.4034 12.7474 16.1429 13.079 15.9212L13.086 15.9165C13.1118 15.8992 13.1374 15.8821 13.1627 15.8652C13.446 15.6759 13.6973 15.5079 13.9076 15.3555C14.0206 15.2735 14.1107 15.204 14.1792 15.146C14.213 15.1174 14.2381 15.0946 14.2559 15.0772C14.2719 15.0616 14.2784 15.054 14.2784 15.0541C14.2784 15.0541 14.2787 15.0537 14.2784 15.0541C14.6171 14.639 14.571 14.0774 14.1204 13.7208C13.695 13.384 13.1348 13.4423 12.7416 13.8801L11.9976 14.7085L11.2536 13.8801Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M3 1H14.4142L21 7.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 4.41421L17.5858 7H15V4.41421Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
