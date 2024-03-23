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
export type MessageCircleDotsIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MessageCircleDotsIconProps>(({ theme, ...props }) => {
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
export default function MessageCircleDotsIcon({
  className = '',
  ...props
}: MessageCircleDotsIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path d='M6.99985 11H9.00985V13H6.99985V11Z' fill='currentcolor' />
        <path d='M10.9999 11H13.0099V13H10.9999V11Z' fill='currentcolor' />
        <path d='M14.9999 11H17.0099V13H14.9999V11Z' fill='currentcolor' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0.999853 12C0.999853 5.92487 5.92472 1 11.9999 1C18.075 1 22.9999 5.92487 22.9999 12C22.9999 18.0751 18.075 23 11.9999 23C10.3271 23 8.73925 22.626 7.31749 21.9563L0.725098 23.2748L2.04358 16.6824C1.37388 15.2606 0.999853 13.6727 0.999853 12ZM11.9999 3C7.02929 3 2.99985 7.02944 2.99985 12C2.99985 13.4751 3.35398 14.8647 3.98098 16.091L4.13947 16.4009L3.27461 20.7252L7.59892 19.8604L7.9089 20.0189C9.13518 20.6459 10.5247 21 11.9999 21C16.9704 21 20.9999 16.9706 20.9999 12C20.9999 7.02944 16.9704 3 11.9999 3Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
