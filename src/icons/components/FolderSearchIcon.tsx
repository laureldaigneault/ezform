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
export type FolderSearchIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FolderSearchIconProps>(({ theme, ...props }) => {
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
export default function FolderSearchIcon({ className = '', ...props }: FolderSearchIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 12.5C8 10.567 9.567 9 11.5 9C13.433 9 15 10.567 15 12.5C15 13.1028 14.8476 13.6699 14.5793 14.1651L16.4142 16L15 17.4142L13.1651 15.5793C12.6699 15.8476 12.1028 16 11.5 16C9.567 16 8 14.433 8 12.5ZM11.5 11C10.6716 11 10 11.6716 10 12.5C10 13.3284 10.6716 14 11.5 14C12.3284 14 13 13.3284 13 12.5C13 11.6716 12.3284 11 11.5 11Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 3H9.30278L12.3028 5H23V21H1V3ZM3 5V19H21V7H11.6972L8.69722 5H3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
