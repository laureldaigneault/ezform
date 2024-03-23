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
export type MoonIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MoonIconProps>(({ theme, ...props }) => {
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
export default function MoonIcon({ className = '', ...props }: MoonIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 11.9999C1 6.44654 5.11437 1.85579 10.4615 1.10681L11.2754 2.8348C9.8756 4.11601 9 5.955 9 7.99995C9 11.8659 12.134 14.9999 16 14.9999C18.0449 14.9999 19.8839 14.1244 21.1651 12.7246L22.8931 13.5385C22.1442 18.8856 17.5534 22.9999 12 22.9999C5.92487 22.9999 1 18.0751 1 11.9999ZM7.95756 3.95643C5.01728 5.43718 3 8.48349 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C15.5165 20.9999 18.5628 18.9827 20.0435 16.0424C18.8278 16.6548 17.454 16.9999 16 16.9999C11.0294 16.9999 7 12.9705 7 7.99995C7 6.54596 7.34519 5.17214 7.95756 3.95643Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
