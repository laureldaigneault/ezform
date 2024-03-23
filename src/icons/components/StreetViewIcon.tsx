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
export type StreetViewIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<StreetViewIconProps>(({ theme, ...props }) => {
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
export default function StreetViewIcon({ className = '', ...props }: StreetViewIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.41896 15.2822 10.4367 13 10.9V19H11V10.9C8.71776 10.4367 7 8.41896 7 6ZM12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3Z" fill="currentcolor"/><path d="M9.19214 15.1766L8.21567 15.3922C6.81544 15.7015 5.70129 16.1644 4.96356 16.6826C4.20805 17.2134 4 17.6824 4 18C4 18.2269 4.0993 18.5183 4.43166 18.8676C4.76892 19.222 5.30422 19.5866 6.04218 19.9146C7.51558 20.5694 9.62114 21 12 21C14.3789 21 16.4844 20.5694 17.9578 19.9146C18.6958 19.5866 19.2311 19.222 19.5683 18.8676C19.9007 18.5183 20 18.2269 20 18C20 17.6824 19.792 17.2134 19.0364 16.6826C18.2987 16.1644 17.1846 15.7015 15.7843 15.3922L14.8079 15.1766L15.2392 13.2236L16.2157 13.4393C17.7789 13.7846 19.1647 14.3285 20.1861 15.0461C21.1898 15.7512 22 16.747 22 18C22 18.8777 21.5956 19.6385 21.0171 20.2463C20.4435 20.8491 19.6608 21.3463 18.7701 21.7422C16.9861 22.5351 14.5917 23 12 23C9.40829 23 7.01386 22.5351 5.2299 21.7422C4.33918 21.3463 3.55645 20.8491 2.98287 20.2463C2.40438 19.6385 2 18.8777 2 18C2 16.747 2.81023 15.7512 3.81386 15.0461C4.83528 14.3285 6.22113 13.7846 7.78433 13.4393L8.76079 13.2236L9.19214 15.1766Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
