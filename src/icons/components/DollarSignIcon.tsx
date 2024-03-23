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
export type DollarSignIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<DollarSignIconProps>(({ theme, ...props }) => {
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
export default function DollarSignIcon({ className = '', ...props }: DollarSignIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M13 1V4H18V6H13V11H14.5C16.9853 11 19 13.0147 19 15.5C19 17.9853 16.9853 20 14.5 20H13V23H11V20H5V18H11V13H9.5C7.01472 13 5 10.9853 5 8.5C5 6.01472 7.01472 4 9.5 4H11V1H13ZM11 6H9.5C8.11929 6 7 7.11929 7 8.5C7 9.88071 8.11929 11 9.5 11H11V6ZM13 13V18H14.5C15.8807 18 17 16.8807 17 15.5C17 14.1193 15.8807 13 14.5 13H13Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}