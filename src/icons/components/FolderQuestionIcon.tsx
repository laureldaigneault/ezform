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
export type FolderQuestionIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FolderQuestionIconProps>(({ theme, ...props }) => {
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
export default function FolderQuestionIcon({ className = '', ...props }: FolderQuestionIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M11.937 10.25C11.4724 10.25 11.0795 10.5677 10.9684 10.9993L10.7192 11.9677L8.7823 11.4692L9.03156 10.5007C9.36454 9.20704 10.5377 8.25 11.937 8.25C13.5938 8.25 14.937 9.59315 14.937 11.25C14.937 12.1814 14.4825 12.7993 14.0065 13.2587C13.8136 13.4449 13.594 13.6269 13.3966 13.7905C13.3675 13.8146 13.3389 13.8383 13.3109 13.8616C13.0805 14.0533 12.86 14.2413 12.6441 14.4571L11.937 15.1642L10.5228 13.75L11.2299 13.0429C11.5141 12.7587 11.7936 12.5223 12.0319 12.324C12.0635 12.2978 12.0939 12.2725 12.1234 12.248C12.328 12.0782 12.4832 11.9494 12.6175 11.8197C12.8915 11.5553 12.937 11.4232 12.937 11.25C12.937 10.6977 12.4893 10.25 11.937 10.25Z" fill="currentcolor"/><path d="M10.9375 15.25H12.9475V17.25H10.9375V15.25Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 3H9.30278L12.3028 5H23V21H1V3ZM3 5V19H21V7H11.6972L8.69722 5H3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
