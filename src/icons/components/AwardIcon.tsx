import React from 'react';
import { styled } from '../../styles/theme';

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
export type AwardIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<AwardIconProps>(({ theme, ...props }) => {
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
  };
});
export default function AwardIcon({ className = '', ...props }: AwardIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.00004 9.76502C8.00004 7.55591 9.79087 5.76502 12 5.76502C14.2091 5.76502 16 7.55591 16 9.76502C16 11.9741 14.2091 13.765 12 13.765C9.79087 13.765 8.00004 11.9741 8.00004 9.76502ZM12 7.76502C10.8955 7.76502 10 8.66046 10 9.76502C10 10.8696 10.8955 11.765 12 11.765C13.1046 11.765 14 10.8696 14 9.76502C14 8.66046 13.1046 7.76502 12 7.76502Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 0.5L14.405 2.36331L17.4459 2.26946L18.2963 5.19051L20.8116 6.90197L19.7827 9.76502L20.8116 12.6281L18.2963 14.3395L17.4459 17.2606L16.9004 17.2437L18.3534 23.0555L12 21.7848L5.64659 23.0555L7.09952 17.2438L6.55419 17.2606L5.70377 14.3395L3.18848 12.6281L4.21742 9.76502L3.18848 6.90197L5.70377 5.19051L6.55419 2.26946L9.59508 2.36331L12 0.5ZM9.17711 17.1796L8.35338 20.4745L12 19.7452L15.6466 20.4745L14.8229 17.1796L14.405 17.1667L12 19.03L9.59508 17.1667L9.17711 17.1796ZM15.9588 15.2137L16.577 13.0903L18.4054 11.8462L17.6574 9.76502L18.4054 7.6838L16.577 6.4397L15.9588 4.31631L13.7483 4.38453L12 3.03004L10.2518 4.38453L8.04132 4.31631L7.42312 6.4397L5.59469 7.6838L6.34266 9.76502L5.59469 11.8462L7.42312 13.0903L8.04132 15.2137L10.2518 15.1455L12 16.5L13.7483 15.1455L15.9588 15.2137Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
