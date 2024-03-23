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
export type AnimationIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<AnimationIconProps>(({ theme, ...props }) => {
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
export default function AnimationIcon({ className = '', ...props }: AnimationIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.02393 8.85763C6.3524 4.46312 10.0217 1 14.5 1C19.1944 1 23 4.80558 23 9.5C23 13.9783 19.5369 17.6476 15.1424 17.9761C14.1833 19.2148 12.7848 20.099 11.1781 20.3934C10.2094 21.9564 8.47738 23 6.5 23C3.46243 23 1 20.5376 1 17.5C1 15.5226 2.04359 13.7906 3.60665 12.8219C3.90098 11.2152 4.78519 9.81671 6.02393 8.85763ZM14.5 3C10.9424 3 8.05216 5.85829 8.0007 9.40345C8.00023 9.43557 8 9.46775 8 9.5C8 13.0899 10.9101 16 14.5 16C14.5322 16 14.5644 15.9998 14.5965 15.9993C18.1417 15.9478 21 13.0576 21 9.5C21 5.91015 18.0899 3 14.5 3ZM6.24224 11.5231C5.85 12.1169 5.59514 12.8085 5.52189 13.5526C5.50743 13.6995 5.5 13.8487 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5C10.1513 18.5 10.3005 18.4926 10.4474 18.4781C11.1915 18.4049 11.8831 18.15 12.4769 17.7578C9.40759 17.0084 6.99162 14.5924 6.24224 11.5231ZM3.66242 15.4504C3.24535 16.0269 3 16.7351 3 17.5C3 19.433 4.567 21 6.5 21C7.26493 21 7.97313 20.7546 8.54961 20.3376C6.12432 19.7848 4.21516 17.8757 3.66242 15.4504Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
