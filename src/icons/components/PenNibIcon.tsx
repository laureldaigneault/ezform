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
export type PenNibIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<PenNibIconProps>(({ theme, ...props }) => {
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
export default function PenNibIcon({ className = '', ...props }: PenNibIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M17.0003 23.4142L23.4146 17L20.0003 13.5858V6.21922L1.62598 1.62563L6.21957 20H13.5861L17.0003 23.4142ZM17.0003 20.5858L14.4146 18H7.78112L4.84612 6.25998L9.67273 11.0866C9.56156 11.3696 9.50035 11.6779 9.50035 12C9.50035 13.3807 10.6196 14.5 12.0003 14.5C13.3811 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.3811 9.49999 12.0003 9.49999C11.6782 9.49999 11.37 9.5612 11.0869 9.67238L6.26033 4.84577L18.0003 7.78077V14.4142L20.5861 17L17.0003 20.5858ZM12.0003 12.5C11.7242 12.5 11.5003 12.2761 11.5003 12C11.5003 11.8616 11.5552 11.738 11.6468 11.6464C11.7384 11.5549 11.862 11.5 12.0003 11.5C12.2765 11.5 12.5003 11.7239 12.5003 12C12.5003 12.2761 12.2765 12.5 12.0003 12.5Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
