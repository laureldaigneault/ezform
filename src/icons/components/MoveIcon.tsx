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
export type MoveIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MoveIconProps>(({ theme, ...props }) => {
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
export default function MoveIcon({ className = '', ...props }: MoveIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1743)"><path d="M12.0002 23.4142L16.4144 19L15.0002 17.5858L13.0002 19.5858V13H19.5859L17.5859 15L19.0002 16.4142L23.4144 12L19.0002 7.58578L17.5859 9L19.5859 11H13.0002V4.41421L15.0002 6.41421L16.4144 5L12.0002 0.585785L7.58594 5L9.00015 6.41421L11.0002 4.41421V11H4.41436L6.41436 9L5.00015 7.58578L0.585938 12L5.00015 16.4142L6.41436 15L4.41436 13H11.0002V19.5858L9.00015 17.5858L7.58594 19L12.0002 23.4142Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1743"><rect width="24" height="24" rx="2" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
