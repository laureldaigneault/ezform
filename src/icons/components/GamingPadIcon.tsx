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
export type GamingPadIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<GamingPadIconProps>(({ theme, ...props }) => {
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
export default function GamingPadIcon({ className = '', ...props }: GamingPadIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M9 12V14H11V16H9V18H7V16H5V14H7V12H9Z" fill="currentcolor"/><path d="M14 13H16.01V15H14V13Z" fill="currentcolor"/><path d="M17 15H19.01V17H17V15Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M17 1V6H13V8H16C19.866 8 23 11.134 23 15C23 18.866 19.866 22 16 22C14.5135 22 13.1337 21.5357 12 20.7452C10.8663 21.5357 9.48653 22 8 22C4.13401 22 1 18.866 1 15C1 11.134 4.13401 8 8 8H11V4H15V1H17ZM8 10C5.23858 10 3 12.2386 3 15C3 17.7614 5.23858 20 8 20C9.28123 20 10.4478 19.5194 11.3331 18.7271L11.9978 18.1321L12.693 18.7503L12.6944 18.7515C13.5762 19.5292 14.7319 20 16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10H8Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
