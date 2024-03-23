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
export type LocationXIconProps = CustomProps & import('react').ComponentPropsWithoutRef<'svg'>;

const StyledIcon = styled('svg')<LocationXIconProps>(({ theme, ...props }) => {
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
export default function LocationXIcon({ className = '', ...props }: LocationXIconProps): React.ReactElement {

  return (
    <StyledIcon
      viewBox='0 0 24 24'
      {...props}
      className={`${className}`}
      preserveAspectRatio={'xMidYMid meet'}
      fill="none">
      <g>
        <path d="M9.5 6.08579L12 8.58579L14.5 6.08579L15.9142 7.5L13.4142 10L15.9142 12.5L14.5 13.9142L12 11.4142L9.5 13.9142L8.08579 12.5L10.5858 10L8.08579 7.5L9.5 6.08579Z" fill="currentcolor"/><path fillRule="evenodd" clipRule="evenodd" d="M3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 12.5262 19.8532 14.7402 18.2923 16.767C16.988 18.4607 15.3185 20.1156 13.6508 21.7689C13.3354 22.0816 13.02 22.3943 12.7071 22.7071L12 23.4142L11.2929 22.7071C10.98 22.3942 10.6646 22.0816 10.3492 21.7689C8.68147 20.1156 7.01205 18.4607 5.70772 16.767C4.14683 14.7402 3 12.5262 3 10ZM12 3C8.13401 3 5 6.13401 5 10C5 11.8921 5.85317 13.678 7.29228 15.5467C8.50741 17.1245 10.0627 18.6673 11.7323 20.3233C11.8212 20.4115 11.9105 20.5 12 20.5889C12.0895 20.5 12.1788 20.4115 12.2677 20.3233C13.9373 18.6673 15.4926 17.1245 16.7077 15.5467C18.1468 13.678 19 11.8921 19 10C19 6.13401 15.866 3 12 3Z" fill="currentcolor"/>
      </g>
    </StyledIcon>
  );
}
