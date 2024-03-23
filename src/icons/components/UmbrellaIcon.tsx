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
export type UmbrellaIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<UmbrellaIconProps>(({ theme, ...props }) => {
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
export default function UmbrellaIcon({ className = '', ...props }: UmbrellaIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M13 1V3.05009C15.2849 3.27966 17.4329 4.29077 19.0711 5.92893C20.9464 7.8043 22 10.3478 22 13V14H13V19.4615C13 19.8744 13.1617 20.2674 13.4447 20.5548C13.7272 20.8417 14.1071 21 14.5 21C14.8929 21 15.2728 20.8417 15.5553 20.5548C15.8383 20.2674 16 19.8744 16 19.4615V18.4615H18V19.4615C18 20.3951 17.6349 21.2935 16.9803 21.9582C16.3251 22.6234 15.4332 23 14.5 23C13.5668 23 12.6749 22.6234 12.0197 21.9582C11.3651 21.2935 11 20.3951 11 19.4615V14H2V13C2 10.3478 3.05357 7.8043 4.92893 5.92893C6.5671 4.29077 8.71511 3.27966 11 3.05009V1H13ZM19.9373 12C19.7165 10.247 18.9195 8.60577 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C5.08052 8.60577 4.28353 10.247 4.06272 12H19.9373Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
