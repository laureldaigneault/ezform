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
export type CloudSnowIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CloudSnowIconProps>(({ theme, ...props }) => {
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
export default function CloudSnowIcon({ className = '', ...props }: CloudSnowIconProps): React.ReactElement {
  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill='none'>
      <g>
        <path
          d='M12 4C9.51785 4 7.45643 5.80967 7.0665 8.18158L6.94118 8.94386L6.17196 9.0151C4.39329 9.17984 3 10.6778 3 12.5C3 14.3009 4.36095 15.7853 6.10988 15.9786L7.10382 16.0885L6.88407 18.0764L5.89013 17.9665C3.13909 17.6624 1 15.3317 1 12.5C1 9.8925 2.8139 7.70961 5.24923 7.14303C6.0632 4.17816 8.7764 2 12 2C15.866 2 19 5.13401 19 9C19 9.00916 19 9.01831 18.9999 9.02746C21.2499 9.27616 23 11.1837 23 13.5C23 15.9853 20.9853 18 18.5 18H17V16H18.5C19.8807 16 21 14.8807 21 13.5C21 12.1193 19.8807 11 18.5 11C18.3549 11 18.2134 11.0123 18.0763 11.0356L16.677 11.2738L16.9237 9.876C16.9738 9.59225 17 9.2996 17 9C17 6.23858 14.7614 4 12 4Z'
          fill='currentcolor'
        />
        <path d='M11 14H13.01V16H11V14Z' fill='currentcolor' />
        <path d='M9 17H11.01V19H9V17Z' fill='currentcolor' />
        <path d='M13 17H15.01V19H13V17Z' fill='currentcolor' />
        <path d='M7 20H9.01V22H7V20Z' fill='currentcolor' />
        <path d='M11 20H13.01V22H11V20Z' fill='currentcolor' />
        <path d='M15 20H17.01V22H15V20Z' fill='currentcolor' />
      </g>
    </StyledIcon>
  );
}
