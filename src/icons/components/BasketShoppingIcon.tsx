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
export type BasketShoppingIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BasketShoppingIconProps>(({ theme, ...props }) => {
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
export default function BasketShoppingIcon({ className = '', ...props }: BasketShoppingIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M10 12V18H8V12H10Z" fill="currentcolor"/><path d="M13 12V18H11V12H13Z" fill="currentcolor"/><path d="M16 12V18H14V12H16Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M10.3868 2.72262L6.86852 7.99997H17.1315L13.6132 2.72262L15.2774 1.61322L19.4667 7.8973L20.0828 7.99997H23V9.99997H20.8471L18.8471 22H5.15287L3.15287 9.99997H1V7.99997H3.91724L4.53326 7.8973L8.72265 1.61322L10.3868 2.72262ZM5.18046 9.99997L6.84713 20H17.1529L18.8195 9.99997H5.18046Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
