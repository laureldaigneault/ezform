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
export type FolderImageIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FolderImageIconProps>(({ theme, ...props }) => {
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
export default function FolderImageIcon({ className = '', ...props }: FolderImageIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.96875 9.97656C4.96875 8.31971 6.3119 6.97656 7.96875 6.97656C9.6256 6.97656 10.9688 8.31971 10.9688 9.97656C10.9688 11.6334 9.6256 12.9766 7.96875 12.9766C6.3119 12.9766 4.96875 11.6334 4.96875 9.97656ZM7.96875 8.97656C7.41647 8.97656 6.96875 9.42428 6.96875 9.97656C6.96875 10.5288 7.41647 10.9766 7.96875 10.9766C8.52103 10.9766 8.96875 10.5288 8.96875 9.97656C8.96875 9.42428 8.52103 8.97656 7.96875 8.97656Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 3H9.30278L12.3028 5H23V21H1V3ZM3 5V19H5.55606L11.9495 12.6397L13.5693 14.028L17.9533 9.6304L21 12.2962V7H11.6972L8.69722 5H3ZM21 14.9538L18.0467 12.3696L15.0921 15.3333L19.3699 19H21V14.9538ZM16.2967 19L12.0505 15.3603L8.39186 19H16.2967Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
