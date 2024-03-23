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
export type CloudIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<CloudIconProps>(({ theme, ...props }) => {
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
export default function CloudIcon({ className = '', ...props }: CloudIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.24923 9.14303C6.0632 6.17816 8.7764 4 12 4C15.866 4 19 7.13401 19 11C19 11.0092 19 11.0183 18.9999 11.0275C21.2499 11.2762 23 13.1837 23 15.5C23 17.9853 20.9853 20 18.5 20H6.5C3.46243 20 1 17.5376 1 14.5C1 11.8925 2.8139 9.70961 5.24923 9.14303ZM12 6C9.51785 6 7.45643 7.80967 7.0665 10.1816L6.94118 10.9439L6.17196 11.0151C4.39329 11.1798 3 12.6778 3 14.5C3 16.433 4.567 18 6.5 18H18.5C19.8807 18 21 16.8807 21 15.5C21 14.1193 19.8807 13 18.5 13C18.3549 13 18.2134 13.0123 18.0763 13.0356L16.677 13.2738L16.9237 11.876C16.9738 11.5922 17 11.2996 17 11C17 8.23858 14.7614 6 12 6Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
