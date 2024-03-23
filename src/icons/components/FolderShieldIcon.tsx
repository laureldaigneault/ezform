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
export type FolderShieldIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FolderShieldIconProps>(({ theme, ...props }) => {
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
export default function FolderShieldIcon({ className = '', ...props }: FolderShieldIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 8.64702L12.6736 9.2609C13.1951 9.7362 13.8471 10 14.625 10H16V12.0554C16 14.4079 14.4185 16.3999 12.2535 16.9673L12 17.0338L11.7465 16.9673C9.58149 16.3999 8 14.4079 8 12.0554L8.00004 11.0004L8.00009 10H9.37504C10.1529 10 10.8048 9.73621 11.3264 9.26089L12 8.64702ZM10 11.963L10 12.0554C10 13.402 10.8429 14.5345 12 14.9537C13.1571 14.5345 14 13.402 14 12.0554V11.963C13.2712 11.8754 12.5972 11.6337 12 11.2546C11.4027 11.6337 10.7288 11.8754 10 11.963Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 3H9.30278L12.3028 5H23V21H1V3ZM3 5V19H21V7H11.6972L8.69722 5H3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
