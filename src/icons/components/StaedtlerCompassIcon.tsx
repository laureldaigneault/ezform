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
export type StaedtlerCompassIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<StaedtlerCompassIconProps>(({ theme, ...props }) => {
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
export default function StaedtlerCompassIcon({ className = '', ...props }: StaedtlerCompassIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.0004 1V3.14494C9.55468 3.57521 8.50042 4.91449 8.50042 6.5C8.50042 7.38465 8.82863 8.19265 9.36993 8.80886L5.90001 14.155C5.1043 13.6237 4.38162 12.9912 3.75016 12.2758L3.08843 11.526L1.58895 12.8495L2.25068 13.5992C3.00159 14.45 3.86249 15.2019 4.81114 15.8327L0.617188 22.2944L2.29481 23.3832L6.56085 16.8105C8.21569 17.5739 10.0584 18 12.0004 18C13.9424 18 15.7852 17.5739 17.4401 16.8104L21.706 23.3832L23.3837 22.2944L19.1898 15.8326C20.1384 15.2019 20.9993 14.45 21.7502 13.5992L22.4119 12.8495L20.9124 11.526L20.2507 12.2758C19.6193 12.9912 18.8966 13.6236 18.1009 14.155L14.631 8.80872C15.1723 8.19252 15.5004 7.38458 15.5004 6.5C15.5004 4.91449 14.4462 3.57521 13.0004 3.14494V1H11.0004ZM12.7785 7.78271L12.8528 7.73446C13.2441 7.46377 13.5004 7.01182 13.5004 6.5C13.5004 5.67157 12.8289 5 12.0004 5C11.172 5 10.5004 5.67157 10.5004 6.5C10.5004 7.01037 10.7553 7.46121 11.1447 7.73216L11.2258 7.78478C11.4519 7.92139 11.717 8 12.0004 8C12.2853 8 12.5516 7.92059 12.7785 7.78271ZM12.9376 9.87313L16.3378 15.1121C15.007 15.6837 13.5408 16 12.0004 16C10.4601 16 8.99396 15.6837 7.66313 15.1122L11.0635 9.87318C11.3617 9.95583 11.6759 10 12.0004 10C12.325 10 12.6393 9.95581 12.9376 9.87313Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
