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
export type MusicIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<MusicIconProps>(({ theme, ...props }) => {
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
export default function MusicIcon({ className = '', ...props }: MusicIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M22 0.819519V18C22 18.9906 21.3977 19.7651 20.676 20.2462C19.9474 20.732 18.9983 21 18 21C17.0017 21 16.0526 20.732 15.324 20.2462C14.6023 19.7651 14 18.9906 14 18C14 17.0093 14.6023 16.2348 15.324 15.7537C16.0526 15.2679 17.0017 15 18 15C18.7125 15 19.3999 15.1365 20 15.3912V8.18044L10 9.84711V20C10 20.9906 9.3977 21.7651 8.67602 22.2462C7.94735 22.732 6.99832 23 6 23C5.00168 23 4.05265 22.732 3.32398 22.2462C2.6023 21.7651 2 20.9906 2 20C2 19.0093 2.6023 18.2348 3.32398 17.7537C4.05265 17.2679 5.00168 17 6 17C6.7125 17 7.3999 17.1365 8 17.3912V3.15285L22 0.819519ZM8 20C8 19.8861 7.93073 19.6606 7.56662 19.4178C7.2095 19.1797 6.65854 19 6 19C5.34146 19 4.7905 19.1797 4.43338 19.4178C4.06927 19.6606 4 19.8861 4 20C4 20.1139 4.06927 20.3394 4.43338 20.5821C4.7905 20.8202 5.34146 21 6 21C6.65854 21 7.2095 20.8202 7.56662 20.5821C7.93073 20.3394 8 20.1139 8 20ZM10 7.81952L20 6.15285V3.18044L10 4.84711V7.81952ZM20 18C20 17.8861 19.9307 17.6606 19.5666 17.4178C19.2095 17.1797 18.6585 17 18 17C17.3415 17 16.7905 17.1797 16.4334 17.4178C16.0693 17.6606 16 17.8861 16 18C16 18.1139 16.0693 18.3394 16.4334 18.5821C16.7905 18.8202 17.3415 19 18 19C18.6585 19 19.2095 18.8202 19.5666 18.5821C19.9307 18.3394 20 18.1139 20 18Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
