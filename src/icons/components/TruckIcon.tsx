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
export type TruckIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<TruckIconProps>(({ theme, ...props }) => {
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
export default function TruckIcon({ className = '', ...props }: TruckIconProps): React.ReactElement {
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
          d='M1 3H15V7H18.9538L23 11.6243V19H20.8293C20.4175 20.1652 19.3062 21 18 21C16.6938 21 15.5825 20.1652 15.1707 19H8.32929C7.91746 20.1652 6.80622 21 5.5 21C4.19378 21 3.08254 20.1652 2.67071 19H1V3ZM3 14V16.3411C3.53746 15.5328 4.45651 15 5.5 15C6.80622 15 7.91746 15.8348 8.32929 17H13V14H3ZM13 12H3V5H13V12ZM15 14V17H15.1707C15.5825 15.8348 16.6938 15 18 15C19.3062 15 20.4175 15.8348 20.8293 17H21V14H15ZM20.6712 12H15V9H18.0462L20.6712 12ZM19 18C19 17.4477 18.5523 17 18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18ZM5.5 17C4.94772 17 4.5 17.4477 4.5 18C4.5 18.5523 4.94772 19 5.5 19C6.05228 19 6.5 18.5523 6.5 18C6.5 17.4477 6.05228 17 5.5 17Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
