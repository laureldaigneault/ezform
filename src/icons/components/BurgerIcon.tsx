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
export type BurgerIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<BurgerIconProps>(({ theme, ...props }) => {
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
export default function BurgerIcon({ className = '', ...props }: BurgerIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path d='M11 4H13.01V6H11V4Z' fill='currentcolor' />
        <path d='M7 6H9.01V8H7V6Z' fill='currentcolor' />
        <path d='M15 6H17.01V8H15V6Z' fill='currentcolor' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11V12H2V11ZM4.06189 10H19.9381C19.446 6.05369 16.0796 3 12 3C7.92038 3 4.55399 6.05369 4.06189 10Z'
          fill='currentcolor'
        />
        <path d='M1 13H12.3028L15 14.7982L17.6972 13H23V15H18.3028L15 17.2019L11.6972 15H1V13Z' fill='currentcolor' />
        <path d='M2 16H12V18H4V20H20V18H18V16H22V22H2V16Z' fill='currentcolor' />
      </g>
    </StyledIcon>
  );
}
