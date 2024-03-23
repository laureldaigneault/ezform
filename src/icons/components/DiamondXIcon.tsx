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
export type DiamondXIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<DiamondXIconProps>(({ theme, ...props }) => {
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
export default function DiamondXIcon({ className = '', ...props }: DiamondXIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M1.99985 13.4142C1.2188 12.6332 1.2188 11.3668 1.99985 10.5858L10.5857 1.99994C11.3668 1.21889 12.6331 1.21889 13.4141 1.99994L22 10.5858C22.781 11.3668 22.781 12.6332 22 13.4142L13.4141 22.0001C12.6331 22.7811 11.3668 22.7811 10.5857 22.0001L1.99985 13.4142ZM8.41406 17L11.9999 20.5859L15.5857 17.0001L11.9998 13.4142L8.41406 17ZM10.5856 12L6.99985 15.5858L3.41406 12L6.99985 8.41422L10.5856 12ZM13.4141 12L16.9999 15.5859L20.5858 12L16.9999 8.41415L13.4141 12ZM15.5857 6.99994L11.9998 10.5858L8.41406 7.00001L11.9999 3.41415L15.5857 6.99994Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
