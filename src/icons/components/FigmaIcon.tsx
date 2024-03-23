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
export type FigmaIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FigmaIconProps>(({ theme, ...props }) => {
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
export default function FigmaIcon({ className = '', ...props }: FigmaIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 2.51472 6.01472 0.5 8.5 0.5H15.5C17.9853 0.5 20 2.51472 20 5C20 6.41363 19.3482 7.67502 18.3287 8.5C19.3482 9.32498 20 10.5864 20 12C20 14.4853 17.9853 16.5 15.5 16.5C14.5749 16.5 13.715 16.2209 13 15.7422V19C13 21.4853 10.9853 23.5 8.5 23.5C6.01472 23.5 4 21.4853 4 19C4 17.5864 4.65183 16.325 5.67134 15.5C4.65183 14.675 4 13.4136 4 12C4 10.5864 4.65183 9.32498 5.67133 8.5C4.65183 7.67502 4 6.41363 4 5ZM8.5 7.5H11V2.5H8.5C7.11929 2.5 6 3.61929 6 5C6 6.38071 7.11929 7.5 8.5 7.5ZM13 2.5V7.5H15.5C16.8807 7.5 18 6.38071 18 5C18 3.61929 16.8807 2.5 15.5 2.5H13ZM11 9.5H8.5C7.11929 9.5 6 10.6193 6 12C6 13.3807 7.11929 14.5 8.5 14.5H11V9.5ZM11 16.5H8.5C7.11929 16.5 6 17.6193 6 19C6 20.3807 7.11929 21.5 8.5 21.5C9.88071 21.5 11 20.3807 11 19V16.5ZM15.5 9.5C14.1193 9.5 13 10.6193 13 12C13 13.3807 14.1193 14.5 15.5 14.5C16.8807 14.5 18 13.3807 18 12C18 10.6193 16.8807 9.5 15.5 9.5Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
