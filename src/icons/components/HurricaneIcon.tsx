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
export type HurricaneIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<HurricaneIconProps>(({ theme, ...props }) => {
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
export default function HurricaneIcon({ className = '', ...props }: HurricaneIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.2299 2.25776C7.01386 1.46489 9.40829 1 12 1C14.5917 1 16.9861 1.46489 18.7701 2.25776C19.6608 2.65364 20.4435 3.15092 21.0171 3.75363C21.5956 4.3615 22 5.12233 22 6C22 6.87767 21.5956 7.6385 21.0171 8.24637C20.4435 8.84908 19.6608 9.34636 18.7701 9.74224C16.9861 10.5351 14.5917 11 12 11C9.40829 11 7.01386 10.5351 5.2299 9.74224C4.33918 9.34636 3.55645 8.84908 2.98287 8.24637C2.40438 7.6385 2 6.87767 2 6C2 5.12233 2.40438 4.3615 2.98287 3.75363C3.55645 3.15092 4.33918 2.65364 5.2299 2.25776ZM4.43166 5.1324C4.0993 5.48164 4 5.7731 4 6C4 6.2269 4.0993 6.51836 4.43166 6.8676C4.76892 7.22199 5.30422 7.58663 6.04218 7.91462C7.51558 8.56946 9.62114 9 12 9C14.3789 9 16.4844 8.56946 17.9578 7.91462C18.6958 7.58663 19.2311 7.22199 19.5683 6.8676C19.9007 6.51836 20 6.2269 20 6C20 5.7731 19.9007 5.48164 19.5683 5.1324C19.2311 4.77801 18.6958 4.41337 17.9578 4.08538C16.4844 3.43054 14.3789 3 12 3C9.62114 3 7.51558 3.43054 6.04218 4.08538C5.30422 4.41337 4.76892 4.77801 4.43166 5.1324Z" fill="currentcolor"/><path d="M4.31722 11.825L5.27785 12.1029C7.23968 12.6703 9.53633 13 12 13C14.4637 13 16.7603 12.6703 18.7222 12.1029L19.6828 11.825L20.2385 13.7463L19.2778 14.0241C17.1213 14.6479 14.6364 15 12 15C9.36365 15 6.87875 14.6479 4.72215 14.0241L3.76153 13.7463L4.31722 11.825Z" fill="currentcolor"/><path d="M5.23367 16.1854L6.21113 16.3966C8.01686 16.7866 9.96555 16.9999 12 16.9999C14.0345 16.9999 15.9831 16.7866 17.7889 16.3966L18.7663 16.1854L19.1886 18.1404L18.2111 18.3515C16.2635 18.7722 14.1732 18.9999 12 18.9999C9.82683 18.9999 7.73649 18.7722 5.78887 18.3515L4.81141 18.1404L5.23367 16.1854Z" fill="currentcolor"/><path d="M7.1808 20.5142L8.16679 20.681C9.4012 20.8898 10.6836 21 12 21C13.3164 21 14.5988 20.8898 15.8332 20.681L16.8192 20.5142L17.1528 22.4862L16.1668 22.653C14.8219 22.8805 13.4279 23 12 23C10.5721 23 9.17808 22.8805 7.83321 22.653L6.84721 22.4862L7.1808 20.5142Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
