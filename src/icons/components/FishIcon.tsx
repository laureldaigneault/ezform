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
export type FishIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<FishIconProps>(({ theme, ...props }) => {
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
export default function FishIcon({ className = '', ...props }: FishIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <g clipPath="url(#clip0_1718_1561)"><path d="M15.9995 11H18.0095V13H15.9995V11Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M5.67171 15.8841L-0.0654297 19.4699L2.92251 12L-0.0654297 4.53014L5.67171 8.11586C7.38392 5.63117 10.2506 4 13.4995 4C18.1753 4 22.0602 7.3769 22.8521 11.8247L22.8833 12L22.8521 12.1753C22.0602 16.6231 18.1753 20 13.4995 20C10.2506 20 7.38392 18.3688 5.67171 15.8841ZM6.35378 10.82L6.40964 10.8499L6.85223 10.0225L7.37754 9.182L7.36976 9.17714C8.72879 7.25364 10.9684 6 13.4995 6C17.1274 6 20.1553 8.57672 20.8497 12C20.1553 15.4233 17.1274 18 13.4995 18C10.9684 18 8.72879 16.7464 7.36976 14.8229L7.37754 14.818L6.85223 13.9775L6.40964 13.1501L6.35378 13.18L6.31755 13.122L5.45871 13.6588L4.6461 14.0935L4.67544 14.1483L4.06452 14.5301L5.07658 12L4.06452 9.46986L4.67544 9.85168L4.6461 9.90654L5.45871 10.3412L6.31755 10.878L6.35378 10.82Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1718_1561"><rect width="24" height="24" fill="white"/></clipPath></defs>
      </g>
    </StyledIcon>
  );
}
