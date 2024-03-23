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
export type ImageCircleIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<ImageCircleIconProps>(({ theme, ...props }) => {
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
export default function ImageCircleIcon({ className = '', ...props }: ImageCircleIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.34315 13.3431 6 15 6C16.6569 6 18 7.34315 18 9C18 10.6569 16.6569 12 15 12C13.3431 12 12 10.6569 12 9ZM15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C17.3585 1 21.8202 4.83051 22.8 9.90227C22.9314 10.5821 23 11.2835 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 12.5634 3.05176 13.1147 3.15079 13.6493L8.92474 9.41512L9.39269 10.6403C10.2553 12.8987 12.4419 14.5 15 14.5C17.7696 14.5 20.103 12.6225 20.7928 10.0699C19.9098 6.02685 16.3073 3 12 3ZM20.7667 14.0446C19.3115 15.5581 17.2662 16.5 15 16.5C12.044 16.5 9.46417 14.897 8.07936 12.5152L3.77922 15.6686C5.18347 18.8106 8.33605 21 12 21C16.2673 21 19.8409 18.0302 20.7667 14.0446Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
