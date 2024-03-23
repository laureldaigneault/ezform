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
export type UserShieldIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<UserShieldIconProps>(({ theme, ...props }) => {
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
export default function UserShieldIcon({ className = '', ...props }: UserShieldIconProps): React.ReactElement {
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
          d='M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6ZM12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3Z'
          fill='currentcolor'
        />
        <path
          d='M4.06189 21C4.55399 17.0537 7.92038 14 12 14C12.4302 14 12.8517 14.0339 13.2623 14.0989L14.25 14.2553L14.5628 12.2799L13.5751 12.1235C13.0614 12.0421 12.5353 12 12 12C6.47715 12 2 16.4772 2 22V23H14.1908V21H4.06189Z'
          fill='currentcolor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19 13.5404L19.7284 14.3149C20.2616 14.8818 20.8969 15.1667 21.625 15.1667H23V17.3979C23 19.9614 21.5185 22.2756 19.2924 22.9563L19 23.0457L18.7076 22.9563C16.4815 22.2756 15 19.9614 15 17.3979L15.0001 15.1667H16.375C17.1032 15.1667 17.7383 14.8818 18.2715 14.3149L19 13.5404ZM17 17.1249L17 17.3979C17 19.1125 17.9029 20.4397 19 20.9334C20.0971 20.4397 21 19.1125 21 17.3979V17.1253C20.2636 17.0254 19.5905 16.7486 19 16.3253C18.4095 16.7486 17.7364 17.025 17 17.1249Z'
          fill='currentcolor'
        />
      </g>
    </StyledIcon>
  );
}
