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
export type WaterIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<WaterIconProps>(({ theme, ...props }) => {
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
export default function WaterIcon({ className = '', ...props }: WaterIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M7.9162 4H11.3463L13.4516 6H15.2846L17.3899 4H20.82L23.4134 6.46375L22.0359 7.91375L20.0215 6H18.1884L16.0832 8H12.653L10.5478 6H8.71475L6.60949 8H3.17936L0.585938 5.53625L1.96344 4.08625L3.97791 6H5.81094L7.9162 4Z" fill="currentcolor"/><path d="M7.9162 10H11.3463L13.4516 12H15.2846L17.3899 10H20.82L23.4134 12.4638L22.0359 13.9137L20.0215 12H18.1884L16.0832 14H12.653L10.5478 12H8.71475L6.60949 14H3.17936L0.585938 11.5363L1.96344 10.0863L3.97791 12H5.81094L7.9162 10Z" fill="currentcolor"/><path d="M7.9162 16H11.3463L13.4516 18H15.2846L17.3899 16H20.82L23.4134 18.4637L22.0359 19.9137L20.0215 18H18.1884L16.0832 20H12.653L10.5478 18H8.71475L6.60949 20H3.17936L0.585938 17.5363L1.96344 16.0863L3.97791 18H5.81094L7.9162 16Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
