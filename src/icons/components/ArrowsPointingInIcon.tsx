import React from 'react';
import { styled } from '../../styles/theme';

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
export type ArrowsPointingInIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ArrowsPointingInIconProps>(({ theme, ...props }) => {
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
  };
});
export default function ArrowsPointingInIcon({
  className = '',
  ...props
}: ArrowsPointingInIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M3.00015 1.58578L9.00015 7.58579V4H11.0002V11H4.00015V9H7.58594L1.58594 3L3.00015 1.58578Z'
          fill='currentcolor'
        />
        <path
          d='M22.4144 3L16.4144 9L20.0002 9V11L13.0002 11V4H15.0002V7.58578L21.0002 1.58578L22.4144 3Z'
          fill='currentcolor'
        />
        <path
          d='M4.00015 13H11.0002V20H9.00015V16.4142L3.00015 22.4142L1.58594 21L7.58594 15H4.00015V13Z'
          fill='currentcolor'
        />
        <path
          d='M13.0002 13H20.0002V15H16.4144L22.4144 21L21.0002 22.4142L15.0002 16.4142V20H13.0002V13Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
