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
export type ClipboardUserIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ClipboardUserIconProps>(({ theme, ...props }) => {
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
export default function ClipboardUserIcon({ className = '', ...props }: ClipboardUserIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z" fill="currentcolor"/><path d="M12 17C11.1307 17 10.3886 17.5551 10.1135 18.3332L9.7803 19.2761L7.89462 18.6096L8.22787 17.6668C8.7765 16.1145 10.2568 15 12 15C13.7432 15 15.2235 16.1145 15.7721 17.6668L16.1054 18.6096L14.2197 19.2761L13.8865 18.3332C13.6114 17.5551 12.8693 17 12 17Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M8.58579 1H15.4142L17 2.58579V3H21V23H3V3H7V2.58579L8.58579 1ZM7 5H5V21H19V5H17V7H7V5ZM15 3.41421L14.5858 3H9.41421L9 3.41421V5H15V3.41421Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
