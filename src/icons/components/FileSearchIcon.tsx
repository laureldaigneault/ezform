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
export type FileSearchIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FileSearchIconProps>(({ theme, ...props }) => {
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
export default function FileSearchIcon({ className = '', ...props }: FileSearchIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 14.5C8 12.567 9.567 11 11.5 11C13.433 11 15 12.567 15 14.5C15 15.1028 14.8476 15.6699 14.5793 16.1651L16.4142 18L15 19.4142L13.1651 17.5793C12.6699 17.8476 12.1028 18 11.5 18C9.567 18 8 16.433 8 14.5ZM11.5 13C10.6716 13 10 13.6716 10 14.5C10 15.3284 10.6716 16 11.5 16C12.3284 16 13 15.3284 13 14.5C13 13.6716 12.3284 13 11.5 13Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M3 1H14.4142L21 7.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 4.41421L17.5858 7H15V4.41421Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
